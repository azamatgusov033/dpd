const body = document.querySelector('.banner')
function createSlider (id = 'slider') {
    const slides =  []
    const slider = document.createElement('div')
    slider.classList.add('slider')
    slider.id = id
    body.append(slider)
    const sliderInner = document.createElement('div')
    sliderInner.classList.add('slider__inner')
    slider.append(sliderInner)
    for (let i = 1; i < 4; i++) {
        const sliderItem = document.createElement('div')
        sliderItem.classList.add('slider__item')
        const img = document.createElement('img')
        img.src = 'banner_images/' + i + '.jpg'
        img.alt = i
        sliderItem.append(img)
        sliderInner.append(sliderItem)
        slides.push(sliderItem)
        
    }
    const activeSlide = () => {
        slides.forEach((slide, index) => {
            if (currentSlide === index) {
                slide.classList.add('active')
            } else {
                slide.classList.remove('active')
            }
        })
    }
    const switchSlide = () => {
        activeSlide()
        activeDot()
        setInterval(next, 5000)
    }
    const next = () => {
        if (currentSlide === slides.length - 1) {
            currentSlide = 0
        } else {
            currentSlide++
        }
        switchSlide()
    }
    
    const prev = () => {
        if (currentSlide === 0) {
            currentSlide = slides.length - 1
        } else {
            currentSlide--
        }
        switchSlide()
    
    switchSlide()
    }
    function createArrow(parent, previos = true) {
        const arrow = document.createElement('div')
        const arrowImg = document.createElement('img')
        arrowImg.src = 'icons/arrow.svg'
        arrowImg.alt = 'arrow'
        arrow.append(arrowImg)
        if (previos) {
            newClass = 'slider__arrow--left'
            arrow.addEventListener('click', prev)
        }
        else {
                arrow.addEventListener('click', next)
                newClass = 'slider__arrow--right'
            }
    
        arrow.classList.add('slider__arrow')
        arrow.classList.add(newClass)
        parent.append(arrow)
    }
    function createPagination () {
        const pagination = document.createElement('ul')
        pagination.classList.add('slider__pagination')
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li')
            dot.addEventListener('click', () => {
                currentSlide = i
                switchSlide()
            })
            pagination.append(dot)
        }
        return pagination
        }
    createArrow(slider, true)
    createArrow(slider, false)
    const pagination = createPagination()
    slider.append(pagination)
    let currentSlide = 0


const dots = pagination.childNodes
const activeDot = () => {
    dots.forEach((dot, index) => {
        if (currentSlide === index) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}
activeSlide()
activeDot()
}
createSlider ('slider')
// createSlider ('slider2')