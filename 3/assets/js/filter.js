"use strict"
const changeable = localStorage.getItem("changeableData");
const changeableData = JSON.parse(changeable);
console.log(changeable);

const Houses2 = [
  {
    title: "Summer House",
    price: 63000,
    imgUrl: "assets/img/product-3.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Minimalist and bright flat",
    price: 51000,
    imgUrl: "assets/img/product-4.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Two storey modern flat",
    price: 29000,
    imgUrl: "assets/img/product-5.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Modern apartment",
    price: 80000,
    imgUrl: "assets/img/product-2.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Place perfect for nature",
    price: 41000,
    imgUrl: "assets/img/product-1.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Minimalist and bright flat",
    price: 51000,
    imgUrl: "assets/img/product-4.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Summer House",
    price: 63000,
    imgUrl: "assets/img/product-3.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Minimalist and bright flat",
    price: 51000,
    imgUrl: "assets/img/product-4.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "sale",
  },
  {
    title: "Royal Apartment",
    price: 1500,
    imgUrl: "assets/img/product-8.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Lunaria Residence",
    price: 3500,
    imgUrl: "assets/img/product-9.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Grand Villa house",
    price: 4500,
    imgUrl: "assets/img/product-10.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Stephen Alexander Homes",
    price: 2400,
    imgUrl: "assets/img/product-11.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Minimalist and bright flat",
    price: 1400,
    imgUrl: "assets/img/product-7.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Place perfect for nature",
    price: 3500,
    imgUrl: "assets/img/product-9.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Beautiful Condo Room",
    price: 2200,
    imgUrl: "assets/img/product-6.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
  {
    title: "Grand Mahaka",
    price: 1400,
    imgUrl: "assets/img/product-7.jpg",
    loc: "82-25 Parsons Blvd, Jamaica, NY 11432, USA",
    property: "rent",
  },
];

function HousesOfSale() {
  let result = "";
  let content = document.querySelector(".fillteredOfSale");

  
  Houses2.forEach((house) => {
    let isPriceChange = ((!changeableData.minPrice) || Number(house.price) >= Number(changeableData.minPrice)) &&
    ((!changeableData.maxPrice) || Number(house.price) <= Number(changeableData.maxPrice))
    if (
      house.property === changeableData.selectValue && isPriceChange
    ) {
      result += `<div class="card w-[416px] bg-white border shadow" style="border-radius: 10px;">
              <a href="rent-detail.html">
                <div class="card-img pt-5 " style="background-image: url(${house.imgUrl}); height: 300px; background-repeat: no-repeat;">
                  <div class="flex justify-between">
                    <div class="w-[76px] ml-9 h-[31px] flex justify-center items-center"
                      style="background-color: #6C60FE ; border-radius: 8px;">
                      <span style="color: white;">Featured</span>
                    </div>
                    <div class="like w-[36px] me-4 h-[36px] flex justify-center items-center"
                      style="border: 2px solid white; border-radius: 50%; cursor: pointer; ">
                      <i style="color: white;" class="fa-regular fa-heart"></i>
                    </div>
                  </div>
                  <div class="price grid grid-cols-3 gap-1 place-items-end h-56">
                    <span class="self-end">$${house.price}</span>
                  </div>
                </div>
              </a>              
              <div class=" max-w-screen-xl mx-auto p-5">
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
                <div class="time flex justify-between mt-5">
                  <div>
                      <p>Listed on: <span style="color: #878789; ">13 Jan 2023</span></p>
                  </div>
                  <div>
                      <p>Listed on: <span style="color: #878789; ">13 Jan 2023</span></p>
                  </div>
              </div>
              </div>
            </div>`;
    }
  });
  if (content) {
    content.innerHTML = result;
  } 
}
HousesOfSale();