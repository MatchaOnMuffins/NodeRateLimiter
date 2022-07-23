const express = require('express');
const rateLimit = require('express-rate-limit')
const app = express();
const port = process.env.PORT || 8080;
app.set('trust proxy', 1)

const apiLimiter = rateLimit({
    windowMs: 15 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
})

app.use('/api', apiLimiter)

app.get('/api', (req, res) => {
    // return ip address of requester
    res.send(req.ip);
})

app.get('/', (req, res) => {
    res.send(`Hello, ${req.ip}`);
})

app.get('/ip', (request, response) => response.send(request.ip))

app.listen(port, () => console.log('Rate Limiting app listening on port ' + port))

