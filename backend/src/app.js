const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const { bookmarkRouter } = require('./routes/bookmark.routes.js')
const { mediaRouter } = require('./routes/media.routes.js')
const { userRouter } = require('./routes/user.routes.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: function(origin, callback) {
        callback(null, true)
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use("/api", bookmarkRouter);
app.use("/api", mediaRouter);
app.use("/api", userRouter);

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to home route "
    })
})

module.exports = { app }