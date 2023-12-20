import React, { useState } from "react";

const FilteredImageList = () => {
  const initialItems = [
    { id: 1, name: "Item 1", imageUrl: "https://cdn-icons-png.flaticon.com/512/518/518615.png" },
    { id: 2, name: "Item 2", imageUrl: "https://th.bing.com/th/id/OIP.mNkA_M4cPli5n6tm3GkimwHaHa?pid=ImgDet&w=199&h=199&c=7" },
    { id: 3, name: "Item 3", imageUrl: "https://cdn-icons-png.flaticon.com/512/4021/4021325.png" },
    { id: 4, name: "Item 1", imageUrl: "https://cdn-icons-png.flaticon.com/512/518/518615.png" },
    { id: 5, name: "Item 2", imageUrl: "https://th.bing.com/th/id/OIP.mNkA_M4cPli5n6tm3GkimwHaHa?pid=ImgDet&w=199&h=199&c=7" },
    { id: 6, name: "Item 3", imageUrl: "https://cdn-icons-png.flaticon.com/512/4021/4021325.png" },
    { id: 7, name: "Item 1", imageUrl: "https://cdn-icons-png.flaticon.com/512/518/518615.png" },
    { id: 8, name: "Item 2", imageUrl: "https://th.bing.com/th/id/OIP.mNkA_M4cPli5n6tm3GkimwHaHa?pid=ImgDet&w=199&h=199&c=7" },
    { id: 9, name: "Item 3", imageUrl: "https://cdn-icons-png.flaticon.com/512/4021/4021325.png" },
    // Agrega más elementos según sea necesario
  ];

  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    const newFilter = e.target.value.toLowerCase();
    setFilter(newFilter);

    // Filtra los elementos en base al nuevo valor del filtro
    const filteredItems = initialItems.filter((item) =>
      item.name.toLowerCase().includes(newFilter)
    );

    setItems(filteredItems);
  };

  // Estilos para las imágenes
  const imageStyles = {
    width: "100px", // ajusta el ancho según sea necesario
    height: "100px", // ajusta el alto según sea necesario
    marginRight: "10px", // ajusta el margen derecho según sea necesario
    marginLeft: "10px", // ajusta el margen derecho según sea necesario
  };

  return (
    <section classname="grid grid-cols-4 gap-4">
    <div >
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filter}
        onChange={handleFilterChange}
      />
      <div className=""> 
      <ul>
        {items.map((item) => (
          <li className=" inline-block" key={item.id}>
            <img src={item.imageUrl} alt={item.name} style={imageStyles} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </section>
  );
};

export default FilteredImageList;
