// function play(){
    
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList);
//     playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame();
}