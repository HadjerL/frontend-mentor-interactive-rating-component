const back = document.querySelector('.back--btn')
const value = document.querySelector('.resutValue');

value.innerText= localStorage.getItem('data') ;

back.addEventListener('click',()=>{
    window.location.assign('index.html');
})
