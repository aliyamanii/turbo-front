// ## GLOBAL ##
const textAreaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');


// ## COUTNER COMPONENT ##

const inputHandler = () => {
    //determine maximum number of characters
    const maxChars = 150;
    //determine number of current characters
    const currentChars = textAreaEl.value.length;
    //calculate the number of remaining characters
    const remainingChars = maxChars - currentChars;
    //display the number ofremaining characters
    counterEl.textContent = remainingChars;

}

textAreaEl.addEventListener('input', inputHandler);

// ## SUBMIT COMPONENT ##

const submitHandler = event => {
    //prevent default browser action
    event.preventDefault();

    //acquire text from the textarea
    const text = textAreaEl.value;

    //validate text
    if (text.includes('#') && text.length >= 5){
        formEl.classList.add('form--valid')

        setTimeout(() => {
            formEl.classList.remove('form--valid')
        }, 2000);

    } else {
        formEl.classList.add('form--invalid')

        setTimeout(() => {
            formEl.classList.remove('form--invalid')
        }, 2000);

        textAreaEl.focus();

        return;
    }

    const hashtag = text.split(' ').find(word => word.includes('#'));
    const company = hashtag.substring(1);
    const badgeLetter = company.substring(0).toUpperCase();
    const upvoteConunt = 0;
    const daysAgo = 0;

    //TODO: add item to the list
   
};

formEl.addEventListener('submit', submitHandler);