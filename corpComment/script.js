// ## GLOBAL ##
const maxChars = 150;

const textAreaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbackListEl = document.querySelector('.feedbacks');
const submitButtonEl = document.querySelector('.submit-btn');

// ## COUTNER COMPONENT ##

const inputHandler = () => {
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
    const upvoteCount = 0;
    const daysAgo = 0;

    //add item to the list
   const feedback = `
        <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                <p class="feedback__letter">${badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${company}</p>
                <p class="feedback__text">${text}</p>
            </div>
            <p class="feedback__date">${daysAgo === 0 ? 'NEW' : `${daysAgo}d`}</p>
        </li>

   `;

   feedbackListEl.insertAdjacentHTML('beforeend', feedback);

   //clear text area
    textAreaEl.value = '';
   //blur submit button
    submitButtonEl.blur();
   //reset counter
   counterEl.textContent = maxChars;

};

formEl.addEventListener('submit', submitHandler);