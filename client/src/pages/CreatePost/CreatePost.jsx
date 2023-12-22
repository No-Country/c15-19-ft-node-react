import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const CrearPost = () => {
  const { auth, loading } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [media, setMedia] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVolverButton, setShowVolverButton] = useState(false);

  useEffect(() => {
    axios
      .get("https://challengeme-uy0s.onrender.com/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });

    axios
      .get("https://challengeme-uy0s.onrender.com/users")
      .then((response) => {
        setUsers(response.data);

        const authenticatedUser = response.data.find((u) => u._id === auth._id);

        if (authenticatedUser) {
          setUser(auth._id);
        } else {
          // Si no está en la lista, elige un usuario aleatorio
          console.error(
            "El usuario autenticado no se encuentra en la lista de usuarios."
          );
        }

        console.log("Lista de usuarios:", response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, [auth._id]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "categoryId":
        setCategoryId(event.target.value);
        break;
      case "hashtags":
        setHashtags(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setMedia(files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("user", auth._id);

    for (let i = 0; i < media.length; i++) {
      const mediaFile = media[i];

      formData.append("typeFile", "image");
      formData.append("media", mediaFile);
    }

    const hashtagsArray = hashtags.split(",").map((tag) => `#${tag.trim()}`);
    formData.append("hashtags", JSON.stringify(hashtagsArray));

    console.log(hashtags);

    try {
      const response = await axios.post(
        "https://challengeme-uy0s.onrender.com/challenges",
        formData
      );

      console.log("Respuesta del servidor:", response.data);

      setShowVolverButton(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-3 items-center pb-8 w-full">
        <div className="col-span-1 text-left">
          <Link to="/home" className="text-black hover:underline">
            <button className="text-sm">
              <FaTimes size="20" />
            </button>
          </Link>
        </div>
        <div className="col-span-1 text-center">
          <h2 className="text-2xl font-semibold mb-4">Crear Post</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-600"
          >
            Categoría
          </label>
          <select
            id="categoryId"
            name="categoryId"
            value={categoryId}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="">Seleccione una categoría</option>
            {categories &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="hashtags"
            className="block text-sm font-medium text-gray-600"
          >
            Hashtags (separados por coma)
          </label>
          <input
            type="text"
            id="hashtags"
            name="hashtags"
            value={hashtags}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="media"
            className="block text-sm font-medium text-gray-600"
          >
            Imágenes
          </label>
          <input
            type="file"
            id="media"
            name="media"
            onChange={handleImageChange}
            multiple
            className="mt-1 p-20 border rounded-md w-full "
          />
        </div>

        <div className="w-full flex justify-center my-6">
          <button
            type="submit"
            className="w-[12rem] h-[4rem] mx-auto bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid text-white hover:text-TextGreen active:text-white rounded-3xl"
            disabled={isLoading}
          >
            {isLoading ? "Creando..." : "Crear Post"}
          </button>
        </div>
      </form>

      <div className="w-full flex justify-center my-6">
        {showVolverButton && (
          <Link to="/home">
            <button className="w-[12rem] h-[4rem] mx-auto bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid text-white hover:text-TextGreen active:text-white rounded-3xl">
              Volver a Home
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CrearPost;
