# 🌍 Family Voyage Tracker

**Family Voyage Tracker** is a personalized travel destination marker that allows users to log their family travels on a world map. Built using `Node.js`, `Express.js`, `PostgreSQL`, and `EJS`, the app provides an intuitive interface to track, view, and share all your family trips in one place.

## Features ✨

* 🗺️ **World Map Integration**: Mark and visualize visited travel destinations on an interactive map.
* 📊 **Database Management**: Store and manage travel destinations using PostgreSQL.
* 🌐 **REST API**: Full RESTful implementation for adding, updating, and deleting travel records.
* 📆 **Travel History**: View a timeline of past family travels.

## Tech Stack 🛠️

* **Backend**: Node.js, Express.js
* **Frontend**: EJS (Embedded JavaScript Templates)
* **Database**: PostgreSQL
* **API**: REST API for managing travel data

## Screenshots 📸

1. **Map View (USER 1)**
   <br/>
   <img align="left" alt="Coding" width="300" src="https://github.com/user-attachments/assets/954efee2-52d6-4943-a99a-c5ea3c0641b4">
   <br/><br/><br/><br/><br/><br/><br/>

2. **Map View (USER 2)**
   <br/>
   <img align="left" alt="Coding" width="300" src="https://github.com/user-attachments/assets/d83c2748-0796-4648-a1c7-bf1206a878a7">
   <br/><br/><br/><br/><br/><br/><br/>

3. **Add Member Form**
   <br/>
   <img align="left" alt="Coding" width="300" src="https://github.com/user-attachments/assets/b788f641-418c-42e2-b457-c33b74134dc1">
   <br/><br/><br/><br/><br/><br/><br/><br/><br/>
## Installation & Setup ⚙️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sandheep-S-95/Family-Voyage-Tracker.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure PostgreSQL**:
   * Set up your PostgreSQL database.
   * Create a `.env` file with your database credentials:
     ```
     DATABASE_URL=your_database_url
     ```

4. **Run the app**:
   ```bash
   npm start
   ```

5. **Access the app**: Open your browser and go to `http://localhost:3000`.

## REST API Endpoints 🌐

* **GET /destinations**: Fetch all travel destinations.
* **POST /destination**: Add a new destination.
* **PUT /destination/:id**: Update an existing destination.
* **DELETE /destination/:id**: Delete a destination.

## License 📜

This project is licensed under the MIT License.

Enjoy tracking your family voyages! 🌍✈️
