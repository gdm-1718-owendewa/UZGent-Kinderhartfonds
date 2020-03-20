const videos = [
    
    {
        title: 'Intro',
        img: 'images/mascot/Intro.PNG',
        src: 'https://player.vimeo.com/video/399136008'
    },
    {
        title: 'Overzicht',
        img: 'images/mascot/Intro.PNG',
        src: 'https://player.vimeo.com/video/395340050'
    },
    {
        title: 'Blauw-voorkamer-ani',
        img: 'images/mascot/Rechtervoorkamer-scherm.png',
        src: 'https://player.vimeo.com/video/399157811'
    },
    {
        title: 'blauw-voorkamer-3D',
        img: 'images/mascot/Rechtervoorkamer-scherm.png',
        src: 'https://player.vimeo.com/video/395341949'
    },
    {
        title: 'Pomp-blauw-ani',
        img: 'images/mascot/DeLongen.png',
        src: 'https://player.vimeo.com/video/399180142'
    },
    {
        title: 'pomp-blauw-3D',
        img: 'images/mascot/DeLongen.png',
        src: 'https://player.vimeo.com/video/395343272'
    },
    {
        title: 'De longen',
        img: 'images/mascot/DeLongen.png',
        src: 'https://player.vimeo.com/video/399201713'
    },
    {
        title: 'overview',
        img: 'images/mascot/Intro.PNG',
        src: 'https://player.vimeo.com/video/395340050'
    },
    {
        title: 'Rood-voorkamer-ani',
        img: 'images/mascot/Linkervoorkamer-scherm.png',
        src: 'https://player.vimeo.com/video/399227821'
    },
    {
        title: 'Rood-voorkamer-3D',
        img: 'images/mascot/Linkervoorkamer-scherm.png',
        src: 'https://player.vimeo.com/video/395341613'
    },
    {
        title: 'Rood-pom-ani',
        img: 'images/mascot/Linkervoorkamer-scherm.png',
        src: 'https://player.vimeo.com/video/399223089'
    },
    {
        title: 'Rood-pomp-3D',
        img: 'images/mascot/Linkervoorkamer-scherm.png',
        src: 'https://player.vimeo.com/video/397133404'
    },
    {
        title: 'rood-kamer-ani',
        img: 'images/mascot/NaarHetLichaam-scherm.png',
        src: 'https://player.vimeo.com/video/399212070'
    },
    {
        title: 'rood-kamer',
        img: 'images/mascot/NaarHetLichaam-scherm.png',
        src: 'https://player.vimeo.com/video/395340050'
    },
   
];
console.log(videos);
let videoNumber = 0;
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const playPause = document.getElementById('play-pause');
let playstate = 'pause';
let display = document.getElementById('videoDisplay');
display.innerHTML = "<iframe id='currentVideo' src=" + videos[0].src+ "></iframe>"


// playPause.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if(playstate !=null && playstate=='pause'){
//         playPause.innerHTML='<img src="images/nav-logo/play-white.svg">'
//         playstate = 'play';
//         let video = document.getElementById('currentVideo');
//         video.play()
//     }else if(playstate !=null && playstate=='play'){
//         playPause.innerHTML='<img src="images/nav-logo/pause-white.svg">'
//         playstate = 'pause';
//         let video = document.getElementById('currentVideo');
//         video.pause()

//     }
// })
let mascot = document.getElementById('mascot');
let videoInfo = document.getElementById('video-info');
mascot.src = videos[videoNumber].img;
// videoInfo.innerHTML = videoNumber+1 + "/" + videos.length + "<br>" + videos[videoNumber].title;

previous.addEventListener('click', (e)=>{
    e.preventDefault();
    if(videoNumber == 0){
        videoNumber = 9;
        activeVideo(videoNumber)
    }else{
        videoNumber-- ;   
        activeVideo(videoNumber)
    }
    mascot.src = videos[videoNumber].img;
    // videoInfo.innerHTML = videoNumber+1 + "/" + videos.length + "<br>" + videos[videoNumber].title;
    console.log(videoNumber)
})
next.addEventListener('click', (e)=>{
    e.preventDefault();
    if(videoNumber == 9){
        videoNumber = 0;
        activeVideo(videoNumber)  
    }else{
        videoNumber++ ;
        activeVideo(videoNumber)
    }
    mascot.src = videos[videoNumber].img;
    // videoInfo.innerHTML = videoNumber+1 + "/" + videos.length + "<br>" + videos[videoNumber].title;
    console.log(videoNumber)
})
const activeVideo = (key) => {
    switch(key){
        case 0:
            display.innerHTML = "<iframe id='currentVideo' src=" + videos[0].src+ " allow='autoplay' ></iframe>"
            break;
        case 1:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[1].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 2:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[2].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 3: 
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[3].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 4: 
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[4].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 5:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[5].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 6:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[6].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 7:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[7].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 8:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[8].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 9:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[9].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 10:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[10].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 11:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[11].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 12:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[12].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        case 13:
            display.innerHTML = "<iframe id='currentVideo' src='" + videos[13].src+ "?autoplay=1' allow='autoplay' ></iframe>"
            break;
        }
}