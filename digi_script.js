const hoursEl= document.getElementById("hours")
const minutesEL= document.getElementById("minutes")
const secondsEl= document.getElementById("seconds")
const ampmEl= document.getElementById("ampm")

function updateClock()
{
    let h= new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm="AM"

    if(h>12)
        {
            h=h-12
            ampm="PM"
        }

        hoursEl.innerText= h;
        minutesEL.innerText=m;
        secondsEl.innerText=s;
        ampmEl.innerText=ampm;
        setTimeout(()=>{updateClock},1000)
}
updateClock()