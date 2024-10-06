import React, { useEffect, useState } from 'react';
import { addBook, addGenre, getAuthors, getGenres } from '../api';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsXCircleFill } from 'react-icons/bs'; // Import cancel icon
import { BiPlus } from 'react-icons/bi'; // Import add book and new genre icons
import './AddBookForm.css'; // Import the CSS file
import add_image from './images/addBook.jpg';
import CustomNavbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'; // Import date-fns for date formatting

const AddBookForm = () => {
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [genreId, setGenreId] = useState('');
  const [price, setPrice] = useState('');
  const [publicationDate, setPublicationDate] = useState(null);
  const [newGenre, setNewGenre] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleAddGenre = async (e) => {
    e.preventDefault();
    if (newGenre.trim()) {
      try {
        await addGenre({ genreName: newGenre });
        toast.success('Genre added successfully!');
        const genresData = await getGenres();
        setGenres(genresData.data);
        setNewGenre(''); // Clear the new genre input
      } catch (error) {
        console.error('Error adding genre', error);
        if (error.code == "ERR_BAD_REQUEST" && error.response != undefined && error.response.data != undefined && error.response.data.error != undefined) {
          toast.error(error.response.data.error);
        } else {
          toast.error('Error adding genre. Please try again.');
        }
      }
    }
  };

  useEffect(() => {
    const loadAuthorsAndGenres = async () => {
      try {
        const authorsData = await getAuthors();
        const genresData = await getGenres();
        setAuthors(authorsData.data.authors);
        setGenres(genresData.data);
      } catch (error) {
        console.error('Error fetching authors and genres:', error);
      }
    };

    loadAuthorsAndGenres();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const validateFields = () => {
    const errors = {};

    if (!title.trim()) errors.title = "Title is required";
    if (!authorId) errors.authorId = "Author is required";
    if (!genreId) errors.genreId = "Genre is required";
    if (!price.trim()) {
      errors.price = "Price is required";
    } else if (isNaN(price) || Number(price) <= 0) {
      errors.price = "Price must be a positive number";
    }
    if (!publicationDate) errors.publicationDate = "Publication Date is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    // Format the publication date to YYYY-MM-DD
    const formattedDate = format(publicationDate, 'yyyy-MM-dd');

    try {
      await addBook({ title, authorId, genreId, price, publicationDate: formattedDate, bookImage: imageFile ? imageFile : "" });
      navigate("/books");
      toast.success('Book added successfully!');
      setTitle('');
      setAuthorId('');
      setGenreId('');
      setPrice('');
      setPublicationDate(null);
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error adding book:', error);
      if (error.response && error.response.status !== 401) {
        toast.error('Error adding book. Please try again.');
      }
    }
  };

  const handleCancel = () => {
    navigate('/books'); // Redirect to /books when cancel button is clicked
  };

  return (
    <>
      <CustomNavbar />
      <div className="container add-book-container">
        <h2 style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold', color: '#333' }}>Add New Book</h2>

        <div className="row">
          <div className="col-md-6 mt-4">
            <img src={add_image} alt="Add a Book" className="img-fluid imgcss" />
          </div>
          <div className="col-md-6" style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder='Add title of the book'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <div className="text-danger">{errors.title}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="authorName" className="form-label">Author Name</label>
                <div className="d-flex align-items-center" style={{ justifyContent: "center" }}>
                  <select
                    className="form-select"
                    id="author"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    style={{ width: "100%" }}
                  >
                    <option value="">Select Author</option>
                    {authors.map((author) => (
                      <option key={author.authorId} value={author.authorId}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-secondary"
                    style={{ zIndex: "1", paddingLeft: "10px" }}
                    type="button"
                    onClick={() => navigate('/add-author', { state: { fromPage: 'add-book' } })}
                  >
                    <BiPlus className="mb-1" />
                  </button>
                </div>
                {errors.authorId && <div className="text-danger">{errors.authorId}</div>}
              </div>
              <div className="mb-3">
                <div>
                  <label htmlFor="genreName" className="form-label">Genre Name</label>
                  <div className="d-flex align-items-center">
                    <select
                      className="form-select me-2"
                      id="genre"
                      value={genreId}
                      onChange={(e) => setGenreId(e.target.value)}
                    >
                      <option value="">Select Genre</option>
                      {genres.map((genre) => (
                        <option key={genre.genreId} value={genre.genreId}>
                          {genre.genreName}
                        </option>
                      ))}
                    </select>
                    {errors.genreId && <div className="text-danger">{errors.genreId}</div>}
                  </div>
                </div>
                <div className="d-flex input-group my-3" style={{ justifyContent: "center" }}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="New genre"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                    style={{ width: "85%" }}
                  />
                  <button
                    className="btn btn-secondary"
                    style={{ zIndex: "1", paddingLeft: "10px" }}
                    type="button"
                    onClick={handleAddGenre}
                  >
                    <BiPlus className="mb-1" />
                  </button>
                </div>

              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder='Price of the book'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors.price && <div className="text-danger">{errors.price}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="publicationDate" className="form-label">Publication Date</label>
                <div className="customDatePickerWidth">
                  <DatePicker
                    selected={publicationDate}
                    onChange={(date) => setPublicationDate(date)}
                    className="form-control datepicker"
                    id="publicationDate"
                  />
                </div>
                {errors.publicationDate && <div className="text-danger">{errors.publicationDate}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="bookImage" className="form-label">Book Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="bookImage"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {imagePreview && (
                  <div className="mt-3">
                    <p>Image Preview:</p>
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />
                  </div>
                )}
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faBook} className="me-1" /> Add Book</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={handleCancel}><BsXCircleFill className="mb-1" /> Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBookForm;
