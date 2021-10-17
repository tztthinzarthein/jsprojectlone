// UI
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');

let songindex = 0;

// song title
const songs = ['sample1','sample2','sample3'];

// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){

    // console.log(music);
    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

// event listener for play / pause
playbtn.addEventListener('click',()=>{
   // console.log('hay');
   //  musiccontainer.classList.add('play');
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

// play song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// pause song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// change song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

// previous song
function previoussong(){
    // console.log("hay");
    songindex--;

    if(songindex < 0){
        songindex = songs.length - 1;
    }

    loadsong(songs[songindex]);
    playsong();
}

// next song
function nextsong(){
    // console.log("hay");
    // songindex += 1;
    songindex++;

    if(songindex > songs.length - 1){

        songindex = 0;
    }
    loadsong(songs[songindex]);
    playsong();
}

// Update Progress Bar

function updateprogress(e){
    // console.log('hay');

    // method 1
    // const progresspercent = (audio.currentTime / audio.duration) * 100;
    // console.log(progresspercent);
    // progress.style.width = `${progresspercent}%`;

    // method 2
    // const currentTime = e.target.currentTime;
    // const duration = e.target.duration;
    // const progresspercent = (currentTime / duration) * 100;
    // progress.style.width =`${progresspercent}%`;

    // method 3
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // const progresspercent = (currentTime / duration) * 100;
    // progress.style.width = `${progresspercent} %`;

    // method 4
    const {currentTime,duration} = e.target;
    const progresspercent = (currentTime / duration) * 100;
    progress.style.width = `${progresspercent}%`;

}


// Time play and Stop Update
audio.addEventListener('timeupdate',updateprogress);

// click on progress locationbar
progresscontainer.addEventListener('click',setprogress);

function setprogress(e){
    // console.log("hay");
    const width = e.target.clientWidth;
    const clickx = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickx / width) * 100;

}

// song end

audio.addEventListener('ended', nextsong);