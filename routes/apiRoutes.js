const express = require('express');
const router = express.Router();

//import controller



//APIs 
router.get("/mobile-payment-details", (request,response) => {
    return response.json({
        name:"Akash",
        address:"Kegalle"
    })
})

module.exports=router;