// Load Categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategories(data.data.news_category))
        .catch(error => console.log(error))
};

// Load Categories Function Call
loadCategories();

// Show Categories
const showCategories = categories => {
    const newsContainer = document.getElementById('news');
    categories.forEach(news => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
        <a class="nav-link text-secondary text-semibold" aria-current="page" href="#"
        onclick="loadCategory('${news.category_id}','${news.category_name}')">${news.category_name}</a>
        `;
        newsContainer.appendChild(li);
    });
};

// Load Category
const loadCategory = (id, categoryName) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => showCategory(data.data, categoryName))
        .catch(error => console.log(error))
    toogleSpinner(true);
};

// Show Category
const showCategory = (category, categoryName) => {
    // Item Found
    document.getElementById('found-news').innerText = `${category.length} News Found For ${categoryName}`;
    // Show Categories Process
    const main = document.getElementById('main');
    main.textContent = '';
    category.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-5', 'rounded-4', 'border-0', 'shadow-lg');
        newsDiv.innerHTML = `
            <div class="row g-0 p-4">
                <div class="col-md-3">
                    <img src="${news.thumbnail_url}" class="h-100 w-100 rounded-start" alt="Image of thumbnail">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h3 class="card-title text-secondary">${news.title ? news.title : 'No Title'}</h3>
                        <p class="card-text text-secondary fs-5 mt-sm-2 mt-md-5">${news.details ? news.details.slice(0, 202) : 'No Details'}...</p>
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-between mt-sm-2 mt-md-5">
                            <div class="d-flex align-items-center justify-content-center
                             mt-4">
                                <img src="${news.author.img}" class="rounded-circle me-2" alt="Image of author" height="60px" width="60px">
                                <div>
                                    <div class="fs-5">${news.author.name ? news.author.name : 'Unknown Author'}</div>
                                    <div class="fs-5 text-secondary">${news.author.published_date ? news.author.published_date : 'Unknown Date'}</div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-center justify-content-between mt-4">
                                <i class="fa-solid fa-eye fs-4 text-secondary"></i>
                                <span class="fs-4 text-secondary ms-3">${news.total_view ? news.total_view : 'Unknown View'}</span>
                            </div>
                            <div class="mt-4">
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star fs-5 text-secondary"></i>
                                <i class="fa-solid fa-star-half-stroke fs-5 text-secondary"></i>
                            </div>
                            <div class="mt-4">
                                <button class="btn border-0"
                                data-bs-toggle="modal" data-bs-target="#loadCategoryDetailsModal" onclick="loadCategoryDetails('${news._id}')"><i class="fa-solid fa-arrow-right fs-2 text-info fw-semibold"></i></button>
                                <div class="modal fade" id="loadCategoryDetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" id="modal-body">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info text-white fw-semibold" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        `;
        main.appendChild(newsDiv);
    });
    toogleSpinner(false);
};


// Toogle Spinner Function
const toogleSpinner = isLoading => {
    const spinner = document.getElementById('spinner');
    if (isLoading) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
};

// Load Category Details
const loadCategoryDetails = id => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => showCategoryDetails(data.data[0]))
        .catch(error => console.log(error))
};

// Show Category Details
const showCategoryDetails = category => {
    const title = document.getElementById('exampleModalLabel');
    title.innerText = `${category.title ? category.title : 'No Title'}`;
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${category.image_url}" class="w-100" alt="Image of news">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-between mt-2">
            <div class="d-flex align-items-center justify-content-center
                mt-4">
                <img src="${category.author.img}" class="rounded-circle me-2" alt="Image of author" height="60px" width="60px">
                <div>
                    <div class="fs-5">${category.author.name ? category.author.name : 'Unknown Author'}</div>
                    <div class="fs-5 text-secondary">${category.author.published_date ? category.author.published_date : 'Unknown Date'}</div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center justify-content-between mt-4">
                <i class="fa-solid fa-eye fs-4 text-secondary"></i>
                <span class="fs-4 text-secondary ms-3">${category.total_view ? category.total_view : 'Unknown View'}</span>
            </div>
            <div class="mt-4">
                <div class="fs-5">${category.rating.number ? category.rating.number : 'Unknown Rating'}</div>
                <div class="fs-5 text-secondary">${category.rating.badge ? category.rating.badge : 'Unknown Badge'}</div>
            </div>
        </div>
        <p class="text-secondary mt-4 fs-5">${category.details ? category.details : 'No Details'}</p>
    `;
};

