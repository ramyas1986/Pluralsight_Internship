import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = 'https://localhost:7146/api';

let hasShown401Toast = false;

const api = await axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('jwtToken');
    }
    return Promise.reject(error);
  }
);

export const login = (formData) => { return api.post('/Auth/login', formData) }

export const updateBook = (id, formData) => {
  return api.put(`/books/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      if (!hasShown401Toast) {
        // Show toast notification
        toast.error(' Please log in. Redirecting ...');
        hasShown401Toast = true;

        // Delay redirection to allow toast to appear
        setTimeout(() => {
          window.location.href = '/login'; // Redirect to your login route
        }, 3000); // Adjust time as needed
      }
    } else {
      hasShown401Toast = false; // Reset flag for other errors
    }
    return Promise.reject(error);
  }
);

export const getBooks = () => api.get(`/books`);
export const getBookById = (id) => api.get(`/books/${id}`);
export const addBook = (formData) => {
  return api.post(`/books`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
// export const addBook = (book) => api.post(`/books`, book);
// export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);

export const getAuthors = (selectedLetter, currentPage) => api.get(`/authors`, { params: { letter: selectedLetter } });
export const getAuthorById = (id) => api.get(`/authors/${id}`);
// export const addAuthor = (author) => api.post(`/authors`, author);

export const addAuthor = (formData) => {
  return api.post(`/authors`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
// export const updateAuthor = (id, author) => api.put(`/authors/${id}`, author);

export const updateAuthor = (id, formData) => {
  return api.put(`/authors/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteAuthor = (id) => api.delete(`/authors/${id}`);

export const getGenres = () => api.get(`/genres`);
export const addGenre = (genre) => api.post(`/genres`, genre);

export const searchBooks = (query) => api.get(`/books/search`, { params: { query } });

