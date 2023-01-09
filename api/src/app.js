const express = require('express')
const cors = require('cors')
const app = express();

// connect to mongodb
require('./connectors/mongodb')

const bodyParser = require('body-parser')

require('dotenv').config()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//We want to access the api from another domain
app.use(cors());

const port = process.env.PORT || 3000;

// INCLUDE API ROUTES
// =============================================================================
const routes = require('./routes')

//  Connect all our routes to our application
app.use('/', routes)

// START THE SERVER
// =============================================================================
app.listen(port, () => {
    console.log(`MovingWorlds URL Shortener API v0.1`)
    console.log(`Server running on http://localhost:${port}`)
})
