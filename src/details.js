let details = JSON.parse(localStorage.getItem('detailspage')) || [];
console.log(details);


const showSearch = () => {
    const card = document.getElementById('card');
    card.innerHTML = '';
    details.forEach((item) => {
        card.innerHTML += `
        <div>
        <article class="card">
                <figure>
                    <img src="${item.image}" alt="White House" class="card__image">
                    <div class="details_flex">
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
showSearch();
