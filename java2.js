function openHotelDetail(hotelUrl) {
    window.location.href = hotelUrl;
}
const hotels = [
    { name: 'Ginger Patna', url: 'Ginger-hotel.html' },
    { name: 'The Panache', url: 'The-Panache.html' },
    { name: 'Red Velvet Hotel', url: 'Red-Velvet.html' },
    { name: 'Maurya Hotel', url: 'Hotel-Maurya.html' },
	{ name: 'Hotel Jia International', url: 'Hotel-Jia-International.html' },
	{ name: 'Lemon Tree Premier', url: 'Lemon-Tree-Premier.html' },
    { name: 'The Royal Bihar', url: 'The-Royal-Bihar.html' },
	{ name: 'Olive suites', url: 'Olive-suites.html' },
	{ name: 'FabHotel Royal Chandra', url: 'FabHotel-Royal-Chandra.html' },
	{ name: 'Chanakya inn', url: 'Chanakya-inn.html' },
	
];
const searchBar = document.querySelector('.search-bar');
const searchContainer = document.querySelector('.search-container');
// Create a dropdown for suggestions
const suggestionsDropdown = document.createElement('div');
suggestionsDropdown.classList.add('suggestions-dropdown');
searchContainer.appendChild(suggestionsDropdown);
// Event listener for the input (autocomplete suggestions)
searchBar.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    suggestionsDropdown.innerHTML = '';
    if (query) {
        const matchedHotels = hotels.filter(hotel => hotel.name.toLowerCase().startsWith(query));

        matchedHotels.forEach(hotel => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.textContent = hotel.name;
            suggestion.onclick = () => {
                window.location.href = hotel.url; // Go to the hotel page
            };
            suggestionsDropdown.appendChild(suggestion);
        });
    }
});
// Event listener for the Enter key
searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value.toLowerCase().trim();
        const matchedHotel = hotels.find(hotel => hotel.name.toLowerCase() === query);
        if (matchedHotel) {
            window.location.href = matchedHotel.url;
        } else {
            alert("Hotel Not Found. Try Again.");
        }
    }
});
