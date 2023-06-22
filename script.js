console.log("Welcome to Spotify");

// Initialize the vairiables
let index = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio ('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName : "Salam-e-ishq", filePath : "songs/1.mp3", coversPath : "covers/1.jpg"},  
    {songName : "Salam-e-ishq", filePath : "songs/2.mp3", coversPath : "covers/2.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/3.mp3", coversPath : "covers/3.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/4.mp3", coversPath : "covers/4.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/5.mp3", coversPath : "covers/5.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/6.mp3", coversPath : "covers/6.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/7.mp3", coversPath : "covers/7.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/8.mp3", coversPath : "covers/8.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/9.mp3", coversPath : "covers/9.jpg"},
    {songName : "Salam-e-ishq", filePath : "songs/10.mp3", coversPath : "covers/10.jpg"},
];

songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coversPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById("previous").addEventListener("click", ()=>{
    if(index<=0){
        index = 0;
    }
    else{
        index --;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById("next").addEventListener("click", ()=>{
    if(index>=9){
        index = 0;
    }
    else{
        index ++;
    } 
    audioElement.src = `songs/${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})