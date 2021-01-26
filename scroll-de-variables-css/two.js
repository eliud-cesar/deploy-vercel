const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')

const reootStyle = document.documentElement.style





const ChangeColorRed = e => {
    reootStyle.setProperty('--red', e.target.value)
}

const ChangeColorGreen = e => {
    reootStyle.setProperty('--green', e.target.value)
}

const ChangeColorBlue = e => {
    reootStyle.setProperty('--blue', e.target.value)
}






red.addEventListener('change', e => {
    ChangeColorRed(e)
})

red.addEventListener('mousemove', e => {
    ChangeColorRed(e)
})


green.addEventListener('change', e => {
    ChangeColorGreen(e)
})

green.addEventListener('mousemove', e => {
    ChangeColorGreen(e)
})


blue.addEventListener('change', e => {
    ChangeColorBlue(e)
})

blue.addEventListener('mousemove', e => {
    ChangeColorBlue(e)
})



