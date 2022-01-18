const sketch = document.querySelector('.sketch')
const options = document.querySelector('.box')
const size = 16

window.addEventListener('load', () => {
    
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i <= 4; i++){
        const box = document.createElement('div');
        switch(i){
            case 0:
                let title1 = document.createElement(`button`)
                title1.classList.add(`button${i}`)
                title1.textContent = 'Normal mode'
                box.appendChild(title1);
                break
            case 1:
                let title = document.createElement(`button${i}`)
                title.classList.add(`button${i}`)
                title.textContent = 'Color Mode'
                box.appendChild(title);
                break
        }
        box.classList.add(`smallbox`);
        options.appendChild(box);
        
    }

    for(let i = 0; i < size * size; i++){
        let gridElement = document.createElement('div')
        gridElement.classList.add(`gridElement${i}`)
        gridElement.addEventListener('mouseover',(e)=> {
            e.target.style.backgroundColor = '#4D4141'
        })
        sketch.appendChild(gridElement)
    }

})



sketch.addEventListener('mouseover', (e) => {
    let target = e.target
    target.classList.add('active')
})