 
import RestCountries from "./assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./assets/portfolioImages/spacetourism.jpg";
import Advice from "./assets/portfolioImages/advise.png";

import AWS from "./assets/portfolioImages/s3.jpg";
import Todo from "./assets/portfolioImages/todo.jpg"
import Chat_me from "./assets/portfolioImages/Chat_me.png"
import Messmitra from "./assets/portfolioImages/Mess.png"
import song   from "./assets/portfolioImages/song.png"




 
const ProjectsData = [
   {
    id: "rest-countries",
    img: Messmitra,
    name: "Mess-Mitra",
    stack: ["< Html/>", "< Css />", "< Js />","</React>","</Mongo Db>","</Express>","</Node Js>","</Cloudinary>"],
    live: "https://github.com/Siddhesh7777/bluebit",
    source: "https://github.com/Siddhesh7777/bluebit",
    description:  
"A user-friendly website intended to support bachelors who migrate to new places discovering different food mess services that are readily available in their area.  "  },
   {
    id: "rest-countries",
    img: Chat_me,
    name: "Chat_me",
 stack: ["< Html/>", "< Css />", "< Js />","</React>","</Mongo Db>","</Express>","</Node Js>","</Cloudinary>","</Socket I.O>"],
    live: "https://github.com/Siddhesh7777/Chat_Me_Final",
    source: "https://github.com/Siddhesh7777/Chat_Me_Final",
    description:  
        "The Chat_me Application is a real-time chat platform that allows users to communicate with each other individually or in group chats. This  is built using the MERN stack.",
  },
   
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Book-Mate",
    stack: ["< Html/>", "< Css />", "< Js />"],
    live: "https://bookmate1.netlify.app/",
    source: "https://github.com/Siddhesh7777/bookmate",
    description:  
        "website that can sell and buy the old books by which one can buy the books at the affordable price.",
  },


  {
    id: "Exercise Manager Mern",
    img: AWS,
    name: "Mern Exercise Tracker",
    stack: ["< MERN /> " ],
    live: "https://github.com/Siddhesh7777/Exercise-Manager-MERN",
    source: "https://github.com/Siddhesh7777/Exercise-Manager-MERN",
    description:  
        "store and retrive and add data and make work on the exercise data and tracks the exercise data that the user  want",
  },

 ,


  {
    id: "todo",
    img: Todo,
    name: "React Todo App",
    stack: ["< React/>  ", "< css />"],
    live: "https://todoreactsid.netlify.app/",
    source: "https://github.com/Siddhesh7777/To_do-React",
    description:  
        "React JS todo app that Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation",
  },
  {
    id: "space-tourism",
    img: SpaceTourism,
    name: "Chat  me Real time Application",
    stack: ["< html css />", "< node js/>"],
    live: "https://chatmesd.netlify.app/",
    source: "https://github.com/Siddhesh7777/Chat-Me-Realtime-App",
    description:  
        "Real time Chat Application User can Talk to each other with realtime to it.",
  },
  {
    id: "advice-generator",
    img: song,
    name: "Anime Music player",
    stack: ["< html/>", "< css />", "< JavaScript />"],
    live: "https://animemus.netlify.app",
    source: "https://github.com/Siddhesh7777/digi-anime-musci-player",
    description:  
        "A Music player which can play ,Pause ,Rewind,Next and having different song album to it using Html,Css And JavaScript",
  }
  
   
];



export default {ProjectsData}
