import React, { Component } from 'react';
import axios from 'axios';
import { FaTimes } from "react-icons/fa";

class CrearPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      media: []
    };
  }

  componentDidMount() {
    axios.get('https://challenge-me-backend-uu82.onrender.com/categories')
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.error('Error al obtener las categorías:', error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleImageChange = (event) => {
    const files = event.target.files;
    this.setState({ media: files });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Estado del formulario:', this.state);
  }

  render() {
    return (
      <div className="container mx-auto mt-8 px-8">
        <div className="grid grid-cols-3 items-center pb-8">
          <div className="col-span-1 text-left">
            <a href="/home" className="text-black hover:underline">
              <button className="text-sm"><FaTimes size="20"/></button>
            </a>
          </div>
          <div className="col-span-1 text-center">
            <h2 className="text-2xl font-semibold mb-4">Crear Post</h2>
          </div>
        </div>
            
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="">Seleccione una categoría</option>
              {this.state.categories &&
                this.state.categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="media" className="block text-sm font-medium text-gray-600">
              Imágenes
            </label>
            <input
              type="file"
              id="media"
              name="media"
              onChange={this.handleImageChange}
              multiple
              className="mt-1 p-20 border rounded-md w-full "
            />
          </div>
          <div className="w-full flex justify-center">
              <button
              type="submit"
              className="w-[12rem] h-[4rem] mx-auto bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid text-white hover:text-TextGreen active:text-white rounded-3xl"
            >
              Crear Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CrearPost;
