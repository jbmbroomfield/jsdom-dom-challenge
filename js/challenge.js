const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const likes = document.getElementsByClassName('likes')[0]
const pause = document.getElementById('pause')
const buttons = document.querySelectorAll('button')
const submit = document.getElementById('submit')
const list = document.getElementById('list')
const comment = document.getElementById('comment-input')
let i = 0
let paused = false

function incrementCounter(amount=1) {
    i += amount
    counter.innerText = i
}



window.setInterval(function() {
    if (!paused) {
        incrementCounter(1)
    } 
},1000)

plus.addEventListener('click', function() {
    incrementCounter(1)
})

minus.addEventListener('click', function() {
    incrementCounter(-1)
})

heart.addEventListener('click', function() {
    let li = document.getElementById(`li-${i}`)
    console.log(li)
    if (li) {
        liArray = li.innerText.split(' ')
        liArray[4] = parseInt(liArray[4]) + 1
        liArray[5] = 'times'
        li.innerText = liArray.join(' ')
    } else {
        li = document.createElement('li')
        li.id = `li-${i}`
        li.innerText = `${i} has been liked 1 time`
        likes.appendChild(li)
    }

})

pause.addEventListener('click', function() {
    paused = !paused
    pause.innerText = paused ? 'resume' : 'pause'
    for (const button of buttons) {
        button.disabled = paused && button !== pause
    }
})

submit.addEventListener('click', function(e) {
    const p = document.createElement('p')
    p.innerText = comment.value
    comment.value = ''
    list.appendChild(p)
    e.preventDefault()
})