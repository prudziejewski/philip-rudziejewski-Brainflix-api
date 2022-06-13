const express = require("express");
const router = express.Router();
const fs = require("fs");
const videos = require('../data/videos.json') 
const videoDetails = require('../data/videoDetails.json');
const uuid = require("uuid")

const jsonFile = './data/videoDetails.json'

function getVideos () {
  return JSON.parse(fs.readFileSync(jsonFile));
}

function writeVideos (inputVideo) {
  let existingVideos = getVideos();
  existingVideos.push(inputVideo);
  let newVideos = JSON.stringify(existingVideos);
fs.writeFileSync(jsonFile, newVideos)
}


router.post("/", (req, res) => {
   const { title, description } = req.body;
  
  if (title && description) {
    const newVideo = {
      id: uuid.v4(),
      title: title,
      channel: "Philip Rudz",
      image: "https://i.imgur.com/i6S8m7I.jpg",
      description: description,
      views: "13,092,284",
      likes: "175,985",
      duration: "4:20",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: 1632344461000,
      comments:
      [
        {
        "name": "Micheal Lyons",
        "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        "likes": 0,
        "timestamp": 1628522461000
        },
        {
        "name": "Gary Wong",
        "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        "likes": 0,
        "timestamp": 1626359541000
        },
        {
        "name": "Theodore Duncan",
        "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        "likes": 0,
        "timestamp": 1626011132000
        }
        ]

    };
 writeVideos(newVideo)
    res.status(201).json("Video Added!");
  } else {
    res.status(400).json("error");
  }
   });


router.get("/", function (req, res) {
     
    res.send(getVideos());
});

router.get("/:id",(req, res ) => {
    // req.params.id = get id
    // match to the video 
    let myVideos = getVideos();
    let video = myVideos.find((videoItem) => {
      return req.params.id === videoItem.id
    })

    res.send(video)
});




module.exports = router; 


