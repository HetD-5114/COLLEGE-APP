# 🌐 Cloud-Based Event Registration System

A simple and modern **Event Registration Web Application** that allows users to register for events through a frontend form, with data stored in a **MongoDB database** using a Node.js backend.

---

## 🚀 Features

* 📝 User-friendly event registration form
* ⚡ Real-time data submission using Fetch API
* 🗄️ Data stored in MongoDB database
* 🔗 Backend API using Express.js
* 🎨 Modern Glassmorphism UI design
* 📦 Full-stack project (Frontend + Backend)

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS (Glass UI Styling)
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Local using MongoDB Compass)

---

## 📁 Project Structure

```
project/
│── server.js
│── package.json
│── index.html
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm init -y
npm install express mongoose cors
```

---

### 2️⃣ Start MongoDB

* Open MongoDB Compass
* Connect to:

```
mongodb://localhost:27017
```

* Create:

  * Database: `eventDB`
  * Collection: `registrations`

---

### 3️⃣ Run Server

```bash
node server.js
```

You should see:

```
MongoDB Connected
Server running on http://localhost:3000
```

---

### 4️⃣ Run Frontend

* Open `index.html` in browser
* Fill the form and submit

---

## 🔄 Data Flow

```
Frontend Form → Express Server → MongoDB Database
```

---

## 📊 Sample Data Stored

```json
{
  "name": "Het Dave",
  "student_id": "12345",
  "event": "Tech Fest 2026",
  "date": "2026-04-07"
}
```

---

## 📌 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /register      | Save registration |
| GET    | /registrations | Fetch all records |

---

## 🎯 Output

* Data successfully stored in MongoDB
* Can be viewed in MongoDB Compass

---

## 💡 Future Improvements

* 🔐 Add form validation
* 📄 Display registered users on UI
* ☁️ Deploy using Vercel or Render
* 🔑 Add authentication system

---

## 🙌 Author

**Het Dave**

---

## ⭐ Conclusion

This project demonstrates a complete **full-stack workflow**:

* Frontend form handling
* Backend API creation
* Database integration

Perfect for beginners learning **Web Development + MongoDB** 🚀
