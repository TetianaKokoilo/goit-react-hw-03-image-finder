const API_KEY = '32970758-8ba6ee6d9fec7577e22e4216e';

function fetchImages(name, page) {
  return fetch(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => {if (response.ok) {
        return response.json();
    }
    return Promise.reject(
        new Error(`We don't have pictures with ${name} word`)
    );})
    
}

const api = {
    fetchImages,
};
export default api;