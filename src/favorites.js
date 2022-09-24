let favorites = JSON.parse(localStorage.getItem('favoritespage')) || [];
console.log(favorites);


const showSearch = () => {
    const card = document.getElementById('card');
    card.innerHTML = '';
    favorites.forEach((item) => {
        card.innerHTML += `
        <div>
        <article class="card">
                <figure>
                    <img src="${item.image}" alt="White House" class="card__image">
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
                <div class="btn_container">
                    <button class="btn_fav" data-id=${item.id}>Favorites</button>
                </div>
            </article> 
            </div> `
    });
};
showSearch();