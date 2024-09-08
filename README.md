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

1. **Home Page**
   [Insert screenshot here]

2. **Map View**
   [Insert screenshot here]

3. **Destination Form**
   [Insert screenshot here]

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
