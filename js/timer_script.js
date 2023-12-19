/*setInterval(()=>{
  console.log('3');
},3000);

const id1 = setInterval(()=>{console.log('4');},2000);
console.log('t',id1);
clearInterval(id);

const id2 = setInterval(()=>{console.log('5');},1000);
console.log('t2',id2);

setTimeout(()=>{
  clearInterval(id2);
  clearTimeout(__);
},4000);
*/
/*
function startTimer(timerId,delay,stopDelay){
  const id = setInterval(()=>{console.log('запрос отпр.');},delay);
  setTimeout(()=>{
                  console.log('запрос ост.');
                  clearInterval(id);
                 },stopDelay);
}
startTimer(1,1000,3000);
*/

const start_button = document.getElementById('btn-start');
const pause_button = document.getElementById('btn-pause');
const reset_button = document.getElementById('btn-reset');
const focus_button = document.getElementById('focus');
const shortbreak_button = document.getElementById('shortbreak');
const longbreak_button = document.getElementById('longbreak');
const time = document.getElementById('time');

let buttons = document.querySelectorAll('.btn');
let set;
let active = "focus";
let minCount = 24;
let secCount = 59;
let isPause = true;

time.textContent = `${minCount+1}:00`
const appendZero = (value)=>{
                             value = value<10?`0${value}`:value;
                             return value;
                            }
start_button.addEventListener('click', () =>
{
                                isPause = false;
                                updateButtonsVisibility();

                                if (!isPause) {
                                    time.textContent = `${appendZero(minCount)}:${appendZero(secCount)}`;
                                    set = setInterval(() => {
                                        if (minCount !== 0 || secCount !== 0) {
                                            if (secCount !== 0) {
                                                secCount--;
                                            } else {
                                                if (minCount !== 0) {
                                                    minCount--;
                                                }
                                                secCount = 59;
                                            }
                                            time.textContent = `${appendZero(minCount)}:${appendZero(secCount)}`;
                                        } else {
                                            clearInterval(set);
                                        }
                                    }, 1000);
                                }
});
const resetTimer = (duration) => {
        clearInterval(set);
        isPause = true;
        minCount = duration-1;
        secCount = 59;
        time.textContent = `${minCount+1}:00`
        updateButtonsVisibility();
        pause_button.classList.remove('show');
        pause_button.classList.add('hidden');
        reset_button.classList.remove('show');
        reset_button.classList.add('hidden');
        start_button.classList.remove('hidden');
        start_button.classList.add('show');
};
const updateButtonsVisibility = () => {
  if(isPause){
    start_button.classList.remove('hidden');
    start_button.classList.add('show');
    pause_button.classList.remove('show');
    pause_button.classList.add('hidden');
    reset_button.classList.remove('show');
    reset_button.classList.add('hidden');
    focus_button.classList.remove('hidden');
    focus_button.classList.add('show');
    shortbreak_button.classList.remove('hidden');
    shortbreak_button.classList.add('show');
    longbreak_button.classList.remove('hidden');
    longbreak_button.classList.add('show');
  }
  else{
    start_button.classList.remove('show');
    start_button.classList.add('hidden');
    pause_button.classList.remove('hidden');
    pause_button.classList.add('show');
    reset_button.classList.remove('hidden');
    reset_button.classList.add('show');
    focus_button.classList.remove('show');
    focus_button.classList.add('hidden');
    shortbreak_button.classList.remove('show');
    shortbreak_button.classList.add('hidden');
    longbreak_button.classList.remove('show');
    longbreak_button.classList.add('hidden');
  }
};

focus_button.addEventListener('click', () => {
        resetTimer(25);
        start_button.click();
});

shortbreak_button.addEventListener('click', () => {
        resetTimer(5);
        start_button.click();
});
longbreak_button.addEventListener('click', () => {
        resetTimer(15);
        start_button.click();
});
reset_button.addEventListener('click', () => {
        resetTimer(25);
});
pause_button.addEventListener('click', () => {
        clearInterval(set);
        isPause = true;
        updateButtonsVisibility();
});
resetTimer(25);
