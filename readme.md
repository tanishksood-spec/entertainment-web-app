# 🎬 Entertainment Web App

A full-stack entertainment web application that allows users to browse trending movies and TV shows, search for content, and bookmark their favorites. Built with React, Node.js, Express, and MongoDB.

![App Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)

---

## 🌐 Live Demo

🔗 **Frontend:** [https://entertainment-web-app-git-master-tanishksood-specs-projects.vercel.app](https://entertainment-web-app-git-master-tanishksood-specs-projects.vercel.app)

🔗 **Backend API:** [https://entertainment-web-app-backend-0dvu.onrender.com](https://entertainment-web-app-backend-0dvu.onrender.com)

---

## ✨ Features

- 🎥 Browse **Trending Movies** and **TV Shows**
- 🔍 **Search** for any movie or TV series
- 🔖 **Bookmark** your favorite movies and shows
- 👤 **User Authentication** (Register & Login)
- 🔐 **JWT Authentication** with secure HTTP-only cookies
- 📱 **Fully Responsive** design for all screen sizes
- 🎨 Beautiful dark theme UI

---

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| React 18 | UI Library |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Client-side Routing |
| Axios | HTTP Requests |
| React Query | Data Fetching & Caching |
| React Hook Form | Form Handling |
| Material UI | UI Components |

### Backend
| Technology | Description |
|------------|-------------|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM Library |
| bcrypt | Password Hashing |
| JWT | Authentication |
| CORS | Cross Origin Resource Sharing |
| Cookie Parser | Cookie Handling |

### External API
| Service | Description |
|---------|-------------|
| TMDB API | Movies & TV Shows Data |

---

## 📁 Project Structure

```
entertainment-web-app/
│
├── frontend/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable Components
│   │   │   ├── AuthComponents/ # Login, Register, Logout
│   │   │   ├── CssComponents/  # Styled Components
│   │   │   ├── FallbackComponent/
│   │   │   └── HomeMedia/      # Media Cards
│   │   ├── context/            # React Context (Global State)
│   │   ├── pages/              # Page Components
│   │   │   ├── Home.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── TvShows.jsx
│   │   │   ├── Bookmarks.jsx
│   │   │   └── Profile.jsx
│   │   ├── utils/              # Utility Functions
│   │   └── App.jsx             # Main App Component
│   ├── .env                    # Environment Variables
│   └── package.json
│
└── backend/                    # Node.js Backend
    ├── src/
    │   ├── controllers/        # Route Controllers
    │   │   ├── user.controllers.js
    │   │   ├── media.controllers.js
    │   │   ├── bookmark.controllers.js
    │   │   └── mediaSearch.controllers.js
    │   ├── middleware/         # Auth Middleware
    │   │   └── auth.js
    │   ├── models/             # MongoDB Models
    │   │   ├── user.models.js
    │   │   └── bookmark.models.js
    │   ├── routes/             # API Routes
    │   │   ├── user.routes.js
    │   │   ├── media.routes.js
    │   │   └── bookmark.routes.js
    │   ├── utils/              # Utility Functions
    │   └── app.js              # Express App Setup
    ├── index.js                # Entry Point
    ├── .env                    # Environment Variables
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- TMDB API Key ([Get it here](https://www.themoviedb.org/settings/api))

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/tanishksood-spec/entertainment-web-app.git
cd entertainment-web-app
```

#### 2. Setup Backend
```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
MONGODB_URL=mongodb://localhost:27017/EntertainmentWebApp
FRONTEND_URL=http://localhost:5173
TOKEN=your_secret_key
TMDB_KEY=your_tmdb_api_key
PORT=8000
```

Start backend:
```bash
npm start
```

#### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create `.env` file in frontend folder:
```env
VITE_API_URL=http://localhost:8000/api
```

Start frontend:
```bash
npm run dev
```

#### 4. Open in browser
```
http://localhost:5173
```

---

## 🔑 API Endpoints

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | Login user |
| GET | `/api/user/logout` | Logout user |
| GET | `/api/user/profile` | Get user profile |

### Media Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/media/trending` | Get trending media |
| GET | `/api/media/movie/:page` | Get movies |
| GET | `/api/media/tv/:page` | Get TV shows |
| GET | `/api/media/search/:query` | Search media |

### Bookmark Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookmark/add` | Add bookmark |
| DELETE | `/api/bookmark/remove` | Remove bookmark |
| GET | `/api/bookmark/all` | Get all bookmarks |

---

## 🌍 Deployment

- **Frontend** deployed on [Vercel](https://vercel.com)
- **Backend** deployed on [Render](https://render.com)
- **Database** hosted on [MongoDB Atlas](https://cloud.mongodb.com)

---

## 👨‍💻 Author

**Tanishk Sood**

[![GitHub](https://img.shields.io/badge/GitHub-tanishksood--spec-black?logo=github)](https://github.com/tanishksood-spec)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [TMDB API](https://www.themoviedb.org/) for providing movies and TV shows data
- [Vercel](https://vercel.com) for frontend hosting
- [Render](https://render.com) for backend hosting
- [MongoDB Atlas](https://cloud.mongodb.com) for database hosting
