
# Node.js Google OAuth Authentication

This project demonstrates how to implement Google OAuth 2.0 authentication in a Node.js application using Passport.js. It includes:

- Google OAuth strategy setup using `passport-google-oauth20`.
- User information storage in MongoDB.
- Session management using `express-session`.
- Flash messages using `connect-flash`.

---

## 🚀 Requirements

- Node.js (v14 or higher)
- MongoDB (local or cloud - e.g., MongoDB Atlas)
- Google account with OAuth credentials

---

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/3laaElsadany/node_passport_google.git
cd node_passport_google
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory with the following variables:

```env
CLIENTID=your_google_client_id
CLIENTSECRET=your_google_client_secret
CALLBACKURL=your_google_callback_url
SECRET=your_session_secret
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

> You can obtain Google credentials from [Google Cloud Console](https://console.cloud.google.com/).

4. **Start the application:**

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## 🧩 Project Structure

```
node_passport_google/
├── models/
│   └── UserModel.js       
├── config/
│   └── config.js       
│   └── passportGoogle.js 
├── routes/
│   └── authRouter.js       
│   └── defaultRoute.js   
├── views/
│   └── ...                
├── index.js                
└── .env                    
```

---

## ✅ Features

- Google account login.
- Store user data in MongoDB.
- Session handling for authenticated users.
- Flash message display for feedback.

---

