function play(){
    
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    const playGroundSection = document.getElementById('play-ground');
    // console.log(playGroundSection.classList);
    playGroundSection.classList.remove('hidden');
}