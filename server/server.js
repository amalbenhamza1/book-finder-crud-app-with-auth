const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models/index.js');
const bookRoute = require('./routes/bookRoute.js');
const userRoute = require('./routes/userRoute.js');
app.use(cors())
app.use(bodyParser.json());
app.use('/books',bookRoute)
app.use('/users',userRoute);

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
})