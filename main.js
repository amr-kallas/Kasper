let nums=document.querySelectorAll(".stats .number");
let section=document.querySelector(".stats");
let state=false;
function count(element){
    let goal=element.dataset.goal;
    let coun=setInterval(() => {
        element.textContent++;
        
        if(element.textContent===goal)
        clearInterval(coun)
    }, 1000 / goal);
}

window.onscroll=function(){
    if(window.scrollY>=5488){
        if(!state){
        nums.forEach((num) => {
            count(num)
        })
        state=true
    }
    
    }
}

let leftSide=document.querySelector(".icon-circle-left");
let rigthSide=document.querySelector(".icon-circle-right");
let bullets=document.querySelectorAll(".bullets li");
let landing=document.querySelector(".landing");//background-image: 

let counts=0;
bullets[counts].classList.add("active");

rigthSide.onclick=function(){
    if(counts!=2){
        bullets.forEach(bullet=>{
            bullet.classList.remove("active");
        })
        counts++;
        bullets[counts].classList.add("active");
        if(counts==1)
        landing.style.backgroundImage="url(/img/design-features.jpg)";
        else if(counts==2)
        landing.style.backgroundImage="url(/img/shuffle-05.jpg)";
        else{
            landing.style.backgroundImage="url(/img/landing.jpg)";
        }
        leftSide.style.cursor="pointer"

    }
    else{
        rigthSide.style.pointerEvent="none"
    }
}
leftSide.onclick=function(){
    if(counts!=0){
        bullets.forEach(bullet=>{
            bullet.classList.remove("active");
        })
        counts--;
        bullets[counts].classList.add("active");
        if(counts==2)
        landing.style.backgroundImage="url(/img/shuffle-05.jpg)";
        else if(counts==1)
        landing.style.backgroundImage="url(/img/design-features.jpg)";
        else{
            landing.style.backgroundImage="url(/img/landing.jpg)";
        }
        rigthSide.style.cursor="pointer"
    }
    else{
        leftSide.style.pointerEvent="none"
    }
}

