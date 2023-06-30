let result = document.querySelector('.result');
let decreaseBtn = document.querySelector('.decreaseBtn');
let increaseBtn = document.querySelector('.increaseBtn');
let resetBtn = document.querySelector('.resetBtn');


decreaseBtn.addEventListener('click', function(){
    // let result = document.querySelector('.result');
    let counter = parseInt(result.innerHTML);
    counter--;
    return result.innerHTML = counter;
})

resetBtn.addEventListener('click', function(){
    let counter = 0;
    result.innerHTML = counter;
})

increaseBtn.addEventListener('click', function(){
    let counter = parseInt(result.innerHTML);
    counter++;
    return result.innerHTML = counter;
})