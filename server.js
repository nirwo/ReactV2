const express = require('express');
const fileUpload = require('express-fileupload');
const apiRouter = require('./router/api');

const app = express();

app.use(fileUpload());
app.use('/api', apiRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
