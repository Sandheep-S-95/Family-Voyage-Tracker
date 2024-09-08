import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "sandheep",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users=[];
let sel = await db.query("SELECT * FROM users;");
var dummy=sel.rows;
for(var i=0;i<dummy.length;i++)
{
    users.push({id: dummy[i].id, name: dummy[i].name, color: dummy[i].color});
}

async function current_color(){
    let col = await db.query("SELECT color FROM users WHERE id= $1;",[currentUserId]);
    return (col.rows[0].color);
}

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE u_id= $1",[currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  console.log({
    countries: countries,
    total: countries.length,
    users: users,
    color: await current_color(),
  });

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: await current_color(),
  });
});
app.post("/add", async (req, res) => {
  const input = req.body.country;

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );
    //console.log(result);
    const data = result.rows[result.rows.length-1];
    const countryCode = data.country_code;
    console.log(result.rows[result.rows.length-1]);
    
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code,u_id) VALUES ($1,$2)",
        [countryCode,currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    console.log("GOOD");
    currentUserId = req.body.user;
    console.log(currentUserId);
    console.log(current_color());
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name = req.body.name;
  const color = req.body.color;

  const result = await db.query(
    "INSERT INTO users (name, color) VALUES($1, $2) RETURNING *;",
    [name, color]
  );

  sel= await db.query("SELECT * FROM users;");
  dummy=sel.rows;
  users=[];
  for(var i=0;i<dummy.length;i++)
  {
    users.push({id: dummy[i].id, name: dummy[i].name, color: dummy[i].color});
  }

  const id = result.rows[0].id;
  currentUserId = id;

  res.redirect("/");

});


app.get("/new", async(req,res) => {
  res.render("new.ejs");
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
