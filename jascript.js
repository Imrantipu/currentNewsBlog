const loader = document.querySelector("#loader");
loader.innerHTML = `
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
`;

loader.style.display = "none";
try {
  const loadNewsCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
  };
  const displayNewsCategories = loadNewsCategories();
} catch (error) {
  console.error(error);
}

//-----display-category--------
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = ``;
  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <a href="#" class='show-news' onclick="getNews('${category.category_id}')" class='text-decoration-none'>${category.category_name}</a>
        `;
    categoriesContainer.appendChild(categoryDiv);
    categoriesContainer.classList.add("text-decoration-none");
  });
};