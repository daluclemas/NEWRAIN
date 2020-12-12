const container=document.querySelector('.container');


const createHeart=()=>{

    let  hearts=['💜','💙','💛'];

    const header=document.querySelector('h1');
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML='💜';
    container.appendChild(heart);
    header.addEventListener('click',()=>{
        heart.innerText=hearts[Math.floor(Math.random()*3)];
    })
    
   
    heart.style.left=Math.random()*100 + 'vw';
    heart.style.animationDuration=Math.random()*2+3+'s';

    setTimeout(()=>{
        heart.remove();
    },5000)
}
setInterval(createHeart,100);


