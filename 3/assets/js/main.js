"use strict"

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("w3-indigo", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-indigo";
}

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 10, 3000);
  counter("count2", 100, 630, 2500);
  counter("count3", 0, 420, 3000);
  counter("count4", 0, 2050, 3000);
});

let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let swiperTwo = new Swiper(".slide-contentTwo", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});


const Houses = [
  {
    title: "Summer House",
    price: "63,000",
    imgUrl: "assets/img/product-3.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"
  },
  {
    title: "Minimalist and bright flat",
    price: "51,000",
    imgUrl: "assets/img/product-4.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"
  },
  {
    title: "Two storey modern flat",
    price: "29,000",
    imgUrl: "assets/img/product-5.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"

  },
  {
    title: "Modern apartment",
    price: "80,000",
    imgUrl: "assets/img/product-2.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"

  },
  {
    title: "Place perfect for nature",
    price: "41,000",
    imgUrl: "assets/img/product-1.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"

  },
  {
    title: "Minimalist and bright flat",
    price: "51,000",
    imgUrl: "assets/img/product-4.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"
  },
  {
    title: "Summer House",
    price: "63,000",
    imgUrl: "assets/img/product-3.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"
  },
  {
    title: "Minimalist and bright flat",
    price: "51,000",
    imgUrl: "assets/img/product-4.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale"
  },
  {
    title: "Royal Apartment",
    price: "1,500",
    imgUrl: "assets/img/product-8.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Lunaria Residence",
    price: "3,500",
    imgUrl: "assets/img/product-9.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Grand Villa house",
    price: "4,500",
    imgUrl: "assets/img/product-10.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Stephen Alexander Homes",
    price: "2,400",
    imgUrl: "assets/img/product-11.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Minimalist and bright flat",
    price: "1,400",
    imgUrl: "assets/img/product-7.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Place perfect for nature",
    price: "3,500",
    imgUrl: "assets/img/product-9.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Beautiful Condo Room",
    price: "2,200",
    imgUrl: "assets/img/product-6.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  },
  {
    title: "Grand Mahaka",
    price: "1,400",
    imgUrl: "assets/img/product-7.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent"
  }
]

function handleButtonClick(e) {
  e.preventDefault();
  let selectElement = document.querySelector("#countries");
  let minPrice = document.querySelector("#minPrice");
  let maxPrice = document.querySelector("#maxPrice");

  let existingData = localStorage.getItem("changeableData");

  if (existingData === null) {
    localStorage.setItem(
      "changeableData",
      JSON.stringify({
        selectValue: selectElement.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
      })
    );
  } else {
    let data = JSON.parse(existingData);
    data.selectValue = selectElement.value;
    data.minPrice = minPrice.value;
    data.maxPrice = maxPrice.value;

    localStorage.setItem("changeableData", JSON.stringify(data));
  }

  window.location.href = "filter.html"
}

function HousesOfSale() {

  let result = "";
  let content = document.querySelector('.housesOfSale')

  Houses.forEach((house) => {
    if (house.property === "sale") {
      result += `<div class="swiper-slide">
                                <div class="card w-[416px] mt-10 bg-white border shadow" style="border-radius: 10px;">
                                    <a href="buy-detail.html">
                                        <div class="card-img pt-5 "
                                            style="background-image: url(${house.imgUrl}); height: 300px; background-repeat: no-repeat;">
                                            <div class="flex justify-between">
                                                <div class="w-[76px] ml-9 h-[31px] flex justify-center items-center"
                                                    style="background-color: #6C60FE ; border-radius: 8px;">
                                                    <span>Featured</span>
                                                </div>
                                                <div class="like w-[36px] me-4 h-[36px] flex justify-center items-center"
                                                    style="border: 2px solid white; border-radius: 50%; cursor: pointer;">
                                                    <i class="fa-regular fa-heart"></i>
                                                </div>
                                            </div>
                                            <div class="price grid grid-cols-3 gap-1 place-items-end h-56">
                                                <span class="self-end">$${house.price}</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class=" max-w-screen-xl mx-auto p-5">
                                        <div>
                                            <div class="star flex items-center">
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <p><span>4.0</span>(28 Reviews)</p>
                                            </div>
                                        </div>
                                        <a href="buy-detail.html">
                                            <h3 class="">
                                                ${house.title}
                                            </h3>
                                        </a>
                                        <p class="">
                                            <i class="fa-solid fa-location-dot"></i>
                                            ${house.loc}
                                        </p>
                                        <div class="item w-[368px] h-[61px] mt-5 flex items-center justify-around"
                                            style="background-color: #F7F6FF;">
                                            <div>
                                                <span><i class="fa-solid fa-bed me-1"></i>
                                                    2 Beds
                                                </span>
                                            </div>
                                            <div>
                                                <span><i class="fa-solid fa-bath me-1"></i>
                                                    1 Bath
                                                </span>
                                            </div>
                                            <div>
                                                <span><i class="fa-solid fa-building me-1"></i>
                                                    5000 Sqft
                                                </span>
                                            </div>
                                        </div>
                                        <hr class="mt-4">
                                        <div class="time flex justify-between mt-5">
                                            <div>
                                                <p>Listed on: <span>13 Jan 2023</span></p>
                                            </div>
                                            <div>
                                                <p>Listed on: <span>13 Jan 2023</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>`
    }
  });

  content.innerHTML = result
}
HousesOfSale();


function HousesOfRent() {

  let result = "";
  let content = document.querySelector('.housesOfRent')

  Houses.forEach((house) => {
    if (house.property === "rent") {
      result += `<div class="swiper-slide">
      <div class="card w-[416px] bg-white border shadow" style="border-radius: 10px;">
                                    <a href="rent-detail.html">
                                        <div class="card-img pt-5 "
                                            style="background-image: url(${house.imgUrl}); height: 300px; background-repeat: no-repeat;">
                                            <div class="flex justify-between">
                                                <div class="w-[76px] ml-9 h-[31px] flex justify-center items-center"
                                                    style="background-color: #6C60FE ; border-radius: 8px;">
                                                    <span>Featured</span>
                                                </div>
                                                <div class="like w-[36px] me-4 h-[36px] flex justify-center items-center"
                                                    style="border: 2px solid white; border-radius: 50%; cursor: pointer;">
                                                    <i class="fa-regular fa-heart"></i>
                                                </div>
                                            </div>
                                            <div class="price grid grid-cols-3 gap-1 place-items-end h-56">
                                                <span class="self-end">$${house.price}</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class=" max-w-screen-xl mx-auto p-5">
                                        <div>
                                            <div class="star flex items-center">
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <i class="fa-solid fa-star me-1"></i>
                                                <p><span>4.0</span>(28 Reviews)</p>
                                            </div>
                                        </div>
                                        <a href="rent-detail.html">
                                            <h3 class="">
                                                ${house.title}
                                            </h3>
                                        </a>
                                        <p class="">
                                            <i class="fa-solid fa-location-dot"></i>
                                            ${house.loc}
                                        </p>
                                        <div class="item w-[368px] h-[61px] mt-5 flex items-center justify-around"
                                            style="background-color: #F7F6FF;">
                                            <div>
                                                <span><i class="fa-solid fa-bed me-1"></i>
                                                    2 Beds
                                                </span>
                                            </div>
                                            <div>
                                                <span><i class="fa-solid fa-bath me-1"></i>
                                                    1 Bath
                                                </span>
                                            </div>
                                            <div>
                                                <span><i class="fa-solid fa-building me-1"></i>
                                                    5000 Sqft
                                                </span>
                                            </div>
                                        </div>
                                        <hr class="mt-4">
                                        <div class="time mt-5 flex justify-between items-center">
                                            <div>
                                                <a href="">
                                                    <div class="flex items-center">
                                                        <div>
                                                            <img style="border-radius: 50%;" class="w-[60px] h-[60px]"
                                                                src="assets/img/avatar-03.jpg" alt="">
                                                        </div>
                                                        <div class="profile ml-3">
                                                            <a href="">Scott Gwin</a>
                                                            <p>Minipoliies</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="book">
                                                <a href="">
                                                    <button>
                                                        Book Now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div> `
    }
  });

  content.innerHTML = result



}
HousesOfRent()