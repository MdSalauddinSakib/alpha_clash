function hideElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function getRandomAlphabet() {
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0 - 25
    const index = Math.round(Math.random() * 25);
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);

    return alphabet;
}

getRandomAlphabet();