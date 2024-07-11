function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);
}

getRandomAlphabet();