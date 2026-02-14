const categoryItems = document.querySelectorAll("#categoryList li");
const plantCards = document.querySelectorAll(".card");

const priceFilter = document.getElementById("priceFilter");
const sizeFilter = document.getElementById("sizeFilter");
const sunFilter = document.getElementById("sunFilter");
const priceValue = document.getElementById("priceValue");

let selectedCategory = "all";

categoryItems.forEach(item => {
    item.addEventListener("click", () => {
        categoryItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        selectedCategory = item.dataset.category;
        filterPlants();
    });
});

priceFilter.addEventListener("input", () => {
    priceValue.innerText = priceFilter.value;
    filterPlants();
});

sizeFilter.addEventListener("change", filterPlants);
sunFilter.addEventListener("change", filterPlants);

function filterPlants() {
    plantCards.forEach(card => {
        const category = card.dataset.category;
        const price = parseInt(card.dataset.price);
        const size = card.dataset.size;
        const sun = card.dataset.sun;

        const matchCategory =
            selectedCategory === "all" || category === selectedCategory;

        const matchPrice = price <= priceFilter.value;
        const matchSize =
            sizeFilter.value === "all" || size === sizeFilter.value;
        const matchSun =
            sunFilter.value === "all" || sun === sunFilter.value;

        if (matchCategory && matchPrice && matchSize && matchSun) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
