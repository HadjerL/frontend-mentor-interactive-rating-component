const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".submit--btn");
let value = 0;
// changes the styling of the clicked rating element
ratings.forEach((elem,i)=>{ 
    elem.addEventListener('click',(event)=>{
        elem.classList.toggle('clicked');
        const classlist = [...elem.classList]
        if(classlist.includes('clicked')){
            value = elem.innerHTML;
        };
        const allElem= [...ratings]
        const thisElem= allElem.splice(i,1);
        const rest= allElem.filter(elem=>elem!=thisElem);
        rest.forEach(elem=>{
            elem.classList.remove('clicked')
        })
    })
})
document.addEventListener('click',(event)=>{
    const allElem=[...ratings];
    if(!allElem.includes(event.target)){
        allElem.forEach(elem=>{
            elem.classList.remove('clicked');
        })
    }
})

btn.addEventListener('click',()=>{
    if([...ratings].every(elem=>!elem.classList.contains('clicked'))){
        event.preventDefault();
        alert('You have to select a rating');
    }
    else{
        localStorage.setItem('data', value);
        window.location.assign('submitted.html');
    }
})


