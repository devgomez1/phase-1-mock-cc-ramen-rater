// fetch("http://localhost:3000/ramens") // API for the GET request
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((ramen) => {
//       console.log(ramen);
//       loadRamens(ramen);
//     });
//   });

// const ramenDiv = document.getElementById("ramen-menu");
// // Attach the event listener to the parent div instead of individual ramen images
// ramenDiv.addEventListener("click", (event) => {
//   // Check if the clicked element is an image
//   if (event.target.tagName === "IMG") {
//     // Find the ramen object with the corresponding ID
//     const ramenId = event.target.id;
//     fetch(`http://localhost:3000/ramens/${ramenId}`) // Assuming each ramen has a unique endpoint
//       .then((response) => response.json())
//       .then((ramen) => renderRamenDetails(ramen));
//   }
// });

// function loadRamens(ramen) {
//   let img = document.createElement("img");
//   img.src = ramen.image;
//   img.id = ramen.id; // Ensure each image has a unique id corresponding to the ramen's ID

//   ramenDiv.append(img);
// }

// // function renderRamenDetails(ramen) {
// //   // Select the elements inside the ramen-details, not create new ones
// //   let img = document.querySelector("#ramen-detail .detail-image");
// //   img.src = ramen.image;

// //   let name = document.querySelector("#ramen-detail .name");
// //   name.textContent = ramen.name;

// //   let restaurant = document.querySelector("#ramen-detail .restaurant");
// //   restaurant.textContent = ramen.restaurant;

// //   let rating = document.getElementById("rating-display");
// //   rating.textContent = ramen.rating;

//   let comment = document.getElementById("comment-display");
//    comment.textContent = ramen.comment;
// // }

// fetch("http://localhost:3000/ramens")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((ramen) => {
//       renderImage(ramen);
//     });
//     console.log(data);
//   });

// function renderImage(ramen) {
//   let menuDiv = document.querySelector("#ramen-menu");
//   let img = document.createElement("img");
//   img.src = ramen.image;
//   menuDiv.append(img);

//   img.addEventListener("click", function () {
//     let image = document.querySelector("#ramen-detail .detail-image");
//     image.src = ramen.image;

//     let name = document.querySelector("#ramen-detail .name");
//     name.textContent = ramen.name;

//     let restaurant = document.querySelector("#ramen-detail .restaurant");
//     restaurant.textContent = ramen.restaurant;

//     let rating = document.getElementById("rating-display");
//     rating.textContent = ramen.rating;

//     let comment = document.getElementById("comment-display");
//     comment.textContent = ramen.comment;
//   });
// }

fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ramen) => {
      renderImage(ramen);
    });
    console.log(data);
  });

function renderImage(ramen) {
  let menu = document.getElementById("ramen-menu");
  let img = document.createElement("img");
  img.src = ramen.image;
  menu.append(img);

  img.addEventListener("click", function (details) {
    let image = document.querySelector(".detail-image");
    image.src = ramen.image;

    let name = document.querySelector(".name");
    name.textContent = ramen.name;

    let restaurant = document.querySelector(".restaurant");
    restaurant.textContent = ramen.restaurant;

    let rating = document.getElementById("rating-display");
    rating.textContent = ramen.rating;

    let comment = document.getElementById("comment-display");
    comment.textContent = ramen.comment;
  });
}

let form = document.getElementById("new-ramen");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };

  renderImage(newRamen);
});
