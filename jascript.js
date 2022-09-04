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

// news id catched
function getNews(cat_id) {
    loader.style.display = "block";
    document.getElementById("newsList").style.opacity = "0";
    document.getElementById("newsList").style.transition = "0.3s";
    let catName = this.innerHTML;
  
    try {
      const loadNewsByCategories = async () => {
        const caturl = `https://openapi.programming-hero.com/api/news/category/${cat_id}`;
        const catres = await fetch(caturl);
        const newdata = await catres.json();
  
        displayNewsByCat(newdata.data);
      };
      setTimeout(function () {
        loader.style.display = "none";
        document.getElementById("news-count").style.display = "none";
        const displayNewsByCategories = loadNewsByCategories();
        setTimeout(function () {
          document.getElementById("newsList").style.opacity = "1";
          document.getElementById("news-count").style.display = "block";
        }, 500);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }
  try {
    const loadDefaultNewsByCategories = async () => {
      const decaturl = `https://openapi.programming-hero.com/api/news/category/01`;
      const decatres = await fetch(decaturl);
      const dedata = await decatres.json();
  
      displayNewsByCat(dedata.data);
    };
  
    const displayDefaultNewsByCategories = loadDefaultNewsByCategories();
  } catch (err) {
    console.log(err);
  }
  // news id catching done