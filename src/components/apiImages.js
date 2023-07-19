const API_KEY = '37986162-de52f9a52753fd2efa27d9e9b'; 
const BASE_URL = 'https://pixabay.com/api/';
const PICS_PAGE = 12;

export const GetQuery = (nextSearch, page) => {
    const params = new URLSearchParams({
    q: nextSearch,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_PAGE,
  });
    return fetch(`${BASE_URL}?${params}`).then(response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(new Error(`Сталася помилка: ${nextSearch}`));
    });
    
}