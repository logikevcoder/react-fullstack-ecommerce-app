const express = require("express"); // older way of importing.. newer way is import express from 'express';
require('./services/passport');
const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running');
});
