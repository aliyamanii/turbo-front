const textAreaEl = document.querySelector('.textarea');
const charStatEl = document.querySelector('.stat__number--characters');
const wordStatEl = document.querySelector('.stat__number--words');
const twitterStatEl = document.querySelector('.stat__number--twitter');
const facebookStatEl = document.querySelector('.stat__number--facebook');

textAreaEl.addEventListener('input', function() {
    //input validation
    if (textAreaEl.value.includes('<script>')){
        alert('Oi cut that out!');
        textAreaEl.value = textAreaEl.value.replace('<script>', '')
    }
    //determine new numbers
    let wordCount = textAreaEl.value.split(' ').length;
    if (textAreaEl.value.length === 0) {
        wordCount = 0;
    }
    const charCount = textAreaEl.value.length;
    const twitterCount = 280 - charCount;
    const facebookCount = 2200 - charCount;

    //visual indicator that the limit is exceeded
    if (twitterCount < 0) {
        twitterStatEl.classList.add('stat__number--limit');
    } else {
        twitterStatEl.classList.remove('stat__number--limit');
    }
    if (facebookCount < 0) {
        facebookStatEl.classList.add('stat__number--limit');
    } else {
        facebookStatEl.classList.remove('stat__number--limit');
    }

    //set new numbers
    wordStatEl.textContent = wordCount;
    charStatEl.textContent = charCount;
    twitterStatEl.textContent = twitterCount;
    facebookStatEl.textContent = facebookCount;
})
