const loadNews = async() =>
{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

//-----display-category--------
const displayCategories = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = ``;
    categories.forEach(category =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <p>${category.category_name}</p>
        `;
        categoriesContainer.appendChild(categoryDiv);
    })
}
loadNews();
