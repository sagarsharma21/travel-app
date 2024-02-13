const router = require("express").Router();


const Pin = require("../models/Pin");

//create a Pin
router.post("/", async (req, res) => {
    const newPin = new Pin(req.body);
    
    try{
         const savedPin = await newPin.save();
         res.send(200).json(savedPin);
    } catch(err) {
        res.status(500).json(err);
    }
});


//get all Pins
router.get("/", async (req, res) => {
    const pins = await Pin.find();
    
    try{
        res.send(200).json(pins);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;