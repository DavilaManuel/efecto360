const slider = document.querySelector('#slider')
const canvas = document.querySelector('#canvas')

slider.addEventListener('input', handleInputSlider)

const ctx = canvas.getContext('2d')
const images = []

window.addEventListener('load', pageLoaded)

function pageLoaded() {
    for(let i=1; i<= 36; i++) {
        const number = i.toString().padStart(2, '00')
        // const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`
        const url = `https://stockx-360.imgix.net/Air-Jordan-11-Retro-Platinum-Tint-GS/Images/Air-Jordan-11-Retro-Platinum-Tint-GS/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1546585284&w=1000`
        const image = new Image()
        image.src = url
        image.addEventListener('load', () => {
            images[i] = image
            if(i===1) {
                loadImage(i)
            }
        })
    }
}

function loadImage(index) {
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height)
}

function handleInputSlider() {
    loadImage(this.value)
}