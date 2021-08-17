const CoinList = document.getElementById('coinList');
const searchBar = document.getElementById('searchBar');
let hpCoin = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCoin = hpCoin.filter((character) => {
        return (
            coin.name.toLowerCase().includes(searchString)
        );
    });
    displayCoin(filteredCoin);
});

const loadCoin = async () => {
    try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false');
        hpCoin = await res.json();
        displayCoin(hpCoin);
    } catch (err) {
        console.error(err);
    }
};

const displayCoin = (coin) => {
    const htmlString = coin
        .map((coin) => {
            return `
            <li class="coin">
                <h2>${coin.name}</h2>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    CoinList.innerHTML = htmlString;
};

loadCoin();

