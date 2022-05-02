const musicContainer = document.querySelector(".music-container");
const playBtn =document.querySelector("#play-button");
const prevBtn =document.querySelector("#previous-button");
const nextBtn = document.querySelector("#next-button");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//song title,
const songs = ['STAY','Umbrella',"I don't care",
'Ghost','ncs mortals','MaMa','PsyCho','SAHARA',
'Cold',"Never Give Up","Vicetone"
]
//Keep track of SOng
let songIndex = 10;
//Initially load song info Of Dom
loadSong(songs[songIndex])
//update song detials
function loadSong(song){
  title.textContent= song
  audio.src = `music/${song}.mp3`
  cover.src = `photo/${song}.jpg`
}
function playSong(){
musicContainer.classList.add('play')
playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
audio.play();
}
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
    audio.pause()
}
function prevSong(){
songIndex--
if(songIndex <0){
   songIndex=songs.length-1

}
loadSong(songs[songIndex]);
playSong()
}
function nextSong(){
songIndex++
if(songIndex>songs.length-1){
   songIndex=0;
}
loadSong(songs[songIndex]);
playSong()
} 
function updateProgress(e){
   const {duration,currentTime} = e.srcElement;
    const progressPersent = (currentTime/duration) *100;
    progress.style.width = `${progressPersent}%`;

}
function setProgress(e){
   const width = this.clientWidth;
   const clickX = e.offsetX
   const duration = audio.duration
  console.log( audio.currentTime = (clickX/width)*duration,duration)
   
}

//event
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
      playSong()
    }

});
// change song event
prevBtn.addEventListener('click',prevSong);
 nextBtn.addEventListener('click',nextSong);
 
 audio.addEventListener('timeupdate',updateProgress);
 progressContainer.addEventListener('click',setProgress);
 audio.addEventListener("ended",nextSong);