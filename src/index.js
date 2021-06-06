const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port} `))


// settings
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


// middlewares

// routers
app.use(require('./routes/index'))


// static files

app.use(express.static(path.join(__dirname, 'public')))