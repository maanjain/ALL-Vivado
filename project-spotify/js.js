console.log("welcome to it ");
// initialise the variables

let songindex = 0; //first song to play
// play song
let audioelement = new Audio("song/Dusk.mp3");
//master play
let masterplay = document.getElementById("masterplay");
//bar
let bar = document.getElementById("bar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let mastersongname=document.getElementsByClassName('mastersongname')


let song = [
  {
    songname: "love me like you do ",
    filepath: "song/0.mp3",
    coverpath: "covers/cover.jpeg",
  },
  {
    songname: "son2 ",
    filepath: "song/1.mp3",
    coverpath: "covers/cover2.jpeg",
  },
  {
    songname: "song3 ",
    filepath: "song/2.mp3",
    coverpath: "covers/cover3.jpeg",
  },
  {
    songname: "somg4",
    filepath: "song/3.mp3",
    coverpath: "covers/cover4.jpeg",
  },
  {
    songname: "song5 ",
    filepath: "song/4.mp3",
    coverpath: "covers/cover5.jpeg",
  },
  {
    songname: "song6 ",
    filepath: "song/5.mp3",
    coverpath: "covers/cover6.jpeg",
  },
];
songitem.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = song[i].coverpath;
  Element.getElementsByClassName("songname")[0].innertext = song[i].songname;
});

//handel play pause click
masterplay.addEventListener("click", () => {
  //play condition:
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    //forbutton change condition-- remove play to pause button by changing classes
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    // changing opasity of it when it fires
    gif.style.opacity = 1;
  }
  //pause
  else {
    audioelement.pause();
    //forbutton change condition-- remove play to pause button by changing classes
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

//using listen  to event- time update running it

audioelement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //updating bar- using maths - convert into int - into percentage
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  console.log(progress);
  // set value into percentage
  bar.value = progress;
});

// change in bar according to time
bar.addEventListener("change", () => {
  audioelement.currentTime = (bar.value * audioelement.duration) / 100; //percentage value
});
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((Element) => {
        Element.classList.remove("fa-pause");
        Element.classList.add("fa-play");
    })



}

// make them play
Array.from(document.getElementsByClassName("songitemplay")).forEach((Element) => {
    Element.addEventListener("click", (e) => {

      // then after targeting remove the class list to
      // function
      makeallplays();
    //   indexing song

    songindex= parseInt(e.target.id);


      e.target.classList.add("fa-play");
      e.target.classList.remove("fa-pause");
    //   change in audio element accoring to song

    audioelement.src='song/${songindex}.mp3'
    audioelement.currentTime =0;
    audioelement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");

     // song name change in the loweer one 
     mastersongname.innertext=song[songindex].songname

     //whrn it is playing . change opacity 
      gif.style.opacity=1;
    })
})
// previous and forward use case:
document.getElementById('next').addEventListener('click' ,()=>{
    if(songindex>5){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    
    audioelement.src='song/${songindex}.mp3'
    audioelement.currentTime =0;
    audioelement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");

     // song name change in the loweer one 
     mastersongname.innertext=song[songindex].songname

})
document.getElementById('previous').addEventListener('click' ,()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    
    audioelement.src='song/${songindex}.mp3'
    audioelement.currentTime =0;
    audioelement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");

    // song name change in the loweer one 
    mastersongname.innertext=song[songindex].songname
})
