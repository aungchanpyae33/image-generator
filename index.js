const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMore = document.getElementById('show-more')
const a = 'm2Ws-SauWohnGIIFS8oM3gC4zZlIqhDmBQufHbNoGsg';
let keyword = ''
page = 1;
searchform.addEventListener('submit', (e) => {
    e.preventDefault()
    page = 1;
    searchimage()
})
async function searchimage() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${a}&per_page=12`

    const response = await fetch(url)

    const data = await response.json()
    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = ''
    }
    results.map(result => {
        const con = document.createElement('div');
        con.classList.add('img-container')
        const image = document.createElement('img')
        image.src = result.urls.small;
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageLink.appendChild(image);
        con.appendChild(imageLink);
        searchResult.appendChild(con)
    })
    showMore.style.display = 'block'
}

showMore.addEventListener('click', () => {
    page++;
    searchimage()
})