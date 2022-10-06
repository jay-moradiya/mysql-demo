const express = require('express');
require('./config/conection');
const indexRouter = require('./router/indexRouter');
const app = express()
const port = process.env.PORT || 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

//server is running on 
app.listen(port, () => {
    console.log(`server is running on ${port} ...`);
});