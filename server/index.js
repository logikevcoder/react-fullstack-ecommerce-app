const express = require('express'); // older way of importing.. newer way is import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'There' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);