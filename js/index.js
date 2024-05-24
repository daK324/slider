const title1 = document.querySelector('#title1')
const title2 = document.querySelector('#title2')
const title3 = document.querySelector('#title3')
const titleCon = document.querySelector('.box1-section__nav_list')
const sliderImages = document.querySelector('.slider-img')
const sliderArrows = document.querySelector('.arrow')
const sliderDots = document.querySelector('.arrow-dot')
const town = document.querySelector('#city')
const s = document.querySelector('#square')
const clock = document.querySelector('#time')



const images = [
  {
    title: title1,
    img: './img/png/slider1.png',
    city: 'Rostov-on-Don <br> LCD admiral',
    square: '81 m2',
    time: '3.5 months',
  },
  {
    title: title2,
    img: './img/png/slider2.png',
    city: 'Sochi Thieves',
    square: '105 m2',
    time: '4 months',
  },
  {
    title: title3,
    img: './img/png/slider3.png',
    city: 'Rostov-on-Don <br> Patriotic',
    square: '93 m2',
    time: '3 months',
  }
]


function initSlider() {
  if(!images || !images.length) return;

  initImages();
  initArrows();
  initDots()
  initTitles();
  initCharacteristic() 

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].img});" data-index="${index}"></div>`
      sliderImages.innerHTML += imageDiv
    })
  }
}

function initArrows() {
  sliderArrows.querySelectorAll(".arrow-item").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="dot n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`
    sliderDots.innerHTML += dot
  })
  sliderDots.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
      moveSlider(this.dataset.index)
    })
  })
}

function initTitles() {
  images.forEach((item, index) => {
    item.title.classList.add(`n${index}`)
    index === 0? item.title.classList.add('active') : ''
  })
  titleCon.querySelectorAll('.box1-section__nav_item').forEach(item => {
    item.addEventListener('click', function() {
      moveSlider(this.dataset.index)
    })
  })
}

function initCharacteristic(num) {
  images.forEach((image, index) => {
    let citySpan = `<span class="text-js n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].city}</span>`
    document.querySelector('#city').innerHTML += citySpan
    let squareSpan = `<span class="text-js n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].square}</span>`
    document.querySelector('#square').innerHTML += squareSpan
    let timeSpan = `<span class="text-js n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].time}</span>`
    document.querySelector('#time').innerHTML += timeSpan
  })
}

function moveSlider (num) {
  sliderImages.querySelector('.active').classList.remove('active')
  sliderImages.querySelector('.n' + num).classList.add('active')
  sliderDots.querySelector('.active').classList.remove('active')
  sliderDots.querySelector('.n' + num).classList.add('active')
  titleCon.querySelector('.active').classList.remove('active')
  titleCon.querySelector('.n' + num).classList.add('active')

  town.querySelector('.active').classList.remove('active')
  town.querySelector('.n' + num).classList.add('active')
  s.querySelector('.active').classList.remove('active')
  s.querySelector('.n' + num).classList.add('active')
  clock.querySelector('.active').classList.remove('active')
  clock.querySelector('.n' + num).classList.add('active')
}


document.addEventListener('DOMContentLoaded', initSlider)