# 🎬 InstantMovie

InstantMovie is a fullstack movie recommendation web app. It delivers real-time, personalized movie suggestions by fetching data from external APIs.

## 🚀 Features

- 🔥 Displays trending and popular movies
- 🧠 Recommends personalized movies based on user interactions
- 📡 Fetches live data from external movie APIs
- 🔍 Movie details, posters, ratings, and more

## 🛠️ Tech Stack

**Frontend:**

- React
- JavaScript
- Tailwind CSS 
- Axios 
- Zustand

**Backend:**

- Node.js
- Express.js

**Other Tools:**

- Git & GitHub
- Postman (for API testing)
- Render

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/danmile/instantmovie.git
   cd instantmovie
   ```

2. **Install dependencies**

   - For the client:
     ```bash
     cd frontend
     npm install
     ```
   - For the server:
     ```bash
     cd ../backend
     npm install
     ```

3. **Add environment variables**

   Create a `.env` file in the `server` folder with:

   ```
   MONGO_URI=your_mongodb_connection_string
   MOVIE_API_KEY=your_tmdb_api_key
   ```

4. **Run the app**
   - In root folder (concurrently run both client & server):
     ```bash
     npm run dev
     ```

## 🙋‍♂️ Author

Dan Milevski  
📧 [danmil511@gmail.com](mailto:danmil511@gmail.com)

---

LIVE DEMO: 

-- https://instantmovie.onrender.com
