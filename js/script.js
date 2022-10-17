// // Load Categories
// const loadCategories = () => {
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then(res => res.json())
//         .then(data => showCategories(data.data.news_category))
//         .catch(error => console.log(error))
// };

// // Show Categories
// const showCategories = categories => {
//     categories.forEach(category => {
//         const id = category.category_id;
//         loadCategory(id);
//     });
// };

// Load Category
const loadCategory = id => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => showCategory(data.data))
        .catch(error => console.log(error))
};

// Show Category
const showCategory = category => {
    const main = document.getElementById('main');
    main.textContent = '';
    document.getElementById('found-news').innerText = `${category.length} News Found For This Category`;
    category.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-5', 'rounded-4');
        newsDiv.innerHTML = `
            <div class="row g-0 p-4">
                <div class="col-md-4">
                    <img src="${news.thumbnail_url}" class="h-100 w-100 rounded-start" alt="Image of thumbnail">
                </div>
                <div class="col-md-8 py-sm-2 py-md-5">
                    <div class="card-body">
                        <h3 class="card-title text-secondary">${news.title}</h3>
                        <p class="card-text text-secondary fs-5 mt-sm-2 mt-md-5">${news.details.slice(0, 202)}...</p>
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-between mt-sm-2 mt-md-5">
                            <div class="d-flex align-items-center justify-content-center
                             mt-4">
                                <img src="${news.author.img}" class="rounded-circle me-2" alt="Image of author" height="60px" width="60px">
                                <div>
                                    <div class="fs-5">${news.author.name}</div>
                                    <div class="fs-5 text-secondary">${news.author.published_date}</div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-center justify-content-between mt-4">
                                <i class="fa-solid fa-eye fs-4 text-secondary"></i>
                                <span class="fs-4 text-secondary ms-3">${news.total_view}</span>
                            </div>
                            <div class="mt-4">
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star-half-stroke fs-5 text-secondary"></i>
                            </div>
                            <div class="mt-4">
                                <i class="fa-solid fa-arrow-right fs-2 fw-bolder text-info"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        main.appendChild(newsDiv);
    });
};

// Category Select Event
document.getElementById('news').addEventListener('click', function (event) {
    const categories = document.getElementsByClassName('remove-class');
    for (const category of categories) {
        category.classList.remove('bg-info', 'text-white', 'rounded');
    }
    event.target.classList.add('bg-info', 'text-white', 'rounded');
    document.getElementById('news').classList.remove('bg-info', 'text-white', 'rounded');
});

loadCategory('01');