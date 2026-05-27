import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// //DOM Elements
// const searchInput = document.getElementById("search-input");
// const quantityInput = document.getElementById("quantity-input");
// const searchButton = document.getElementById("search-button");
// const gifsContainer = document.getElementById("gifs-div");

// //Other Variables

// let searchTerm = "";
// let searchURI = "";
// let searchQuantity = 5;

// searchInput.addEventListener("input", (event) => {
//     searchTerm = event.target.value;
// });

// quantityInput.addEventListener("input", (event) => {
//     searchQuantity = event.target.value;
// });

// searchButton.addEventListener("click", () => {
//     searchURI = createURI(searchTerm, searchQuantity);
//     searchQuantity = Math.min(Math.max(1, quantityInput.value), 24);
//     run();
//     searchInput.value = "";
//     quantityInput.value = 5;
// });

// function createURI (search, searchQuantity) {
//     return `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${searchQuantity}&api_key=${apiKey}`;
// }

// function run() {
//     fetch(searchURI)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             gifsContainer.innerHTML = "";
//             data.data.forEach(gif => {
//                 const img = document.createElement("img");
//                 img.src = gif.images.original.url;
//                 gifsContainer.appendChild(img);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching GIFs:', error);
//             gifsContainer.innerHTML = "<p>Error loading GIFs. Please try again.</p>";
//         });
// }
