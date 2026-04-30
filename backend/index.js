const dotenv = require('dotenv');
const mongoose = require('mongoose')
const { app } = require('./src/app.js')
const axios = require('axios')

// env configuration 
dotenv.config();

// mongodb connection 
mongoose.connect(process.env.MONGODB_URL,
    { dbName: "EntertainmentWebApp" }
).then(() => { console.log("Mongodb is connected") }
).catch((error) => { console.error(error) })

// server listening
app.listen(8000, () => {
    console.log("Server running on url: http://localhost:" + 8000);
})

// Keep Render server alive - ping every 14 minutes
setInterval(async () => {
    try {
        await axios.get('https://entertainment-web-app-backend-0dvu.onrender.com')
        console.log('Server kept alive ✅')
    } catch (error) {
        console.log('Ping failed')
    }
}, 14 * 60 * 1000)
