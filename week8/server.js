const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        secret: "week8secret",
        resave: false,
        saveUninitialized: false
    })
);

app.get("/", (req, res) => {
    res.send(`
        <h1>Login Page</h1>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "Sunitha" && password === "1234") {
        req.session.username = username;

        res.cookie("username", username);

        res.send(`
            <h1>Login Successful</h1>
            <p>Welcome ${username}</p>
            <a href="/home">Go to Home</a>
            <br><br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send("<h1>Invalid Username or Password</h1><a href='/'>Try Again</a>");
    }
});

app.get("/home", (req, res) => {
    if (req.session.username) {
        res.send(`
            <h1>Home Page</h1>
            <p>Welcome ${req.session.username}</p>
            <p>Login state is maintained using session.</p>
            <a href="/cookie">Read Cookie</a>
            <br><br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send("<h1>Please Login First</h1><a href='/'>Login</a>");
    }
});

app.get("/cookie", (req, res) => {
    const username = req.cookies.username;

    res.send(`
        <h1>Cookie</h1>
        <p>Username stored in cookie: ${username || "No cookie found"}</p>
        <a href="/home">Home</a>
    `);
});

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.clearCookie("username");

        res.send(`
            <h1>Logout Successful</h1>
            <p>You have been logged out.</p>
            <a href="/">Login Again</a>
        `);
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});