const loadCatagories = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    const categories = data.data.news_category.slice(0, 3);
    console.log(categories);

    const tabContainer = document.getElementById('tab-container');

    categories.forEach(element => {
        const tabDiv = document.createElement('div');
    tabDiv.innerHTML = `
  <a class="tab">${element.category_name}</a> 
    `
    tabContainer.appendChild(tabDiv);
    });

}

loadCatagories();