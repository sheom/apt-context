const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    //res.send("Welcome to ConText...");
    res.render('index.ejs');
})

module.exports = router;