const express = require("express");
const router = express.Router();
const fs = require("fs");
const videos = require('../data/videos.json');
const videoDetails = require('../data/videoDetails.json');


fs.readFile('../data/videos.json', 'utf-8', (err, jsonString) => {
    if (err) {
        console.log(err);
    }else {
        try {
        const data = JSON.parse(jsonString)
         console.log(jsonString);
    } catch(err) {
        console.log('Error parsing JSON', err);
    }
}
});


router.get("/", function (req, res) {
    res.send(videos);
});

router.route("/:id").get((req, res ) => {
    // req.params.id = get id
    // match to the video 
    let video = videoDetails.find((videoItem) => {
      return req.params.id === videoItem.id
    })

    res.send(video)
    console.log(req.params.id)
});

router.post("/", (req, res) => {

})


module.exports = router; 


