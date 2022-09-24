let dataFiltered = [];
let data = [];
const inputType = document.getElementById('type');
const btnSearch = document.getElementById('btn_search');


const getData = async () => {
    const URL_API = 'http://localhost:3000/estate';
    const response = await fetch(URL_API);
    data = await response.json();
    dataFiltered = data;
    showSearch();
    console.log(data);
};
getData();


const handleSearch = () => {
    let searchType = inputType.value;
    filterArray(searchType);
    showSearch();
}

btnSearch.addEventListener('click', handleSearch)

const filterArray = (word) => {
    dataFiltered = data.filter(estate => estate.type.toLowerCase().includes(word.toLowerCase()) || estate.ubication.toLowerCase().includes(word.toLowerCase()));
    console.log(dataFiltered);
};

const showSearch = () => {
    const card = document.getElementById('card');
    card.innerHTML = '';
    dataFiltered.forEach((item) => {
        card.innerHTML += `
        <div>
        <article class="card">
                <figure>
                    <img src="${item.image}" alt="White House" class="card__image">
                    <div class="details_flex">
                                
                    <img
                    src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png"
                    alt="eye icon" class="eye" data-id=${item.id} id="details">
                                <img class="btn_fav fav_img" data-id=${item.id}
                                    src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png"
                                    alt="">
                            </div>
                </figure>
                <div class="card__description">
                    <div class="description__name">
                        <p>Type</p>
                        <p>Price:</p>
                        <p>Name:</p>
                        <p>Ubication:</p>
                        <p>Area:</p>
                    </div>
                    <div class="description__details">
                        <p>${item.type}</p>
                        <p>${item.price}</p>
                        <p>${item.name}</p>
                        <p>${item.ubication}</p>
                        <p>${item.area}</p>
                    </div>
                </div>
            </article> 
            </div> `
    });
};

//favorite
let favorites = JSON.parse(localStorage.getItem('favoritespage')) || [];

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn_fav')) {
        const favItem = dataFiltered.find((item) => item.id == target.getAttribute('data-id'));
        const elementExist = favorites.some((item) => item.id === favItem.id);
        console.log(elementExist);
        if (elementExist == false) {
            favorites.push(favItem);
            localStorage.setItem('favoritespage', JSON.stringify(favorites));
        }
    }
});

//details (re fail)
let details = JSON.parse(localStorage.getItem('detailspage')) || [];

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('eye')) {
        const getDetails = dataFiltered.find((item) => item.id == target.getAttribute('data-id'));
        // details.push(getDetails);
        console.log(getDetails);
        localStorage.setItem('detailspage', JSON.stringify([details]));
        window.location.href = "./details.html";
    }
});