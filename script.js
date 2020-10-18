const canvas = document.createElement('div');
canvas.classList.add('canvas');
const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click',()=>{
    location.reload();
})
document.querySelector('body').appendChild(resetButton);
document.querySelector('body').appendChild(canvas);
function fillCanvas(n){
    if(!(n<Infinity&&n>0)) n=3;
    for(let i=1; i<=n*n ; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        const dimension = 100/n+'%'
        pixel.style.width = dimension;
        pixel.style.height = dimension;
        pixel.addEventListener('mouseenter',()=>{
            pixel.style.background=`rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})`
        })
        canvas.appendChild(pixel);
    }
}

fillCanvas(prompt("Enter any number"));
