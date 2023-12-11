import { useState } from "react";
export default function Categories() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con el valor de búsqueda (searchTerm)
        console.log('Búsqueda enviada:', searchTerm);
    };
    return (
        <section className="flex w-[100vw] h-[90vh] min-w-[20rem] max-w-[100vw] flex-col justify-start items-center mt-[4rem]">
            <form className="w-[18rem] flex items-center justify-center bg-gray-50 h-[3rem] px-[1rem] border-2 rounded-full shadow-xl fixed " onSubmit={handleSubmit}>
                <input className=" py-1 px-2 mr-3 rounded-xl placeholder:font-light outline-none"
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Buscar"
                />
                <button className="" type="submit"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#6B7280" className="w-5 h-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg></button>
            </form>
            <article className="mt-[4rem] w-[21rem]">
                <div className="flex justify-between items-center mb-[.5rem]">
                    <h2 className="m-0">GymChallenge</h2>
                    <a className="cursor-pointer text-black text-xs hover:underline" href="http://">Ver más</a>
                </div>
                <div className="flex w-[90vw] overflow-x-scroll whitespace-nowrap">
                    <img src="imagen1.jpg" className="bg-black w-[14rem] h-[14rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen2.jpg" className="bg-black w-[14rem] h-[14rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen3.jpg" className="bg-black w-[14rem] h-[14rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[14rem] h-[14rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[14rem] h-[14rem] flex-shrink-0 mr-4" alt="" />
                    {/* Añade más imágenes según sea necesario */}
                </div>
            </article>
            <article className="mt-[4rem] w-[21rem]">
                <div className="flex justify-between items-center mb-[.5rem]">
                    <h2 className="m-0">GymChallenge</h2>
                    <a className="cursor-pointer text-black text-xs hover:underline" href="http://">Ver más</a>
                </div>
                <div className="flex w-[90vw] overflow-x-scroll whitespace-nowrap">
                    <img src="imagen1.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen2.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen3.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    {/* Añade más imágenes según sea necesario */}
                </div>
            </article>
            <article className="mt-[4rem] w-[21rem]">
                <div className="flex justify-between items-center mb-[.5rem]">
                    <h2 className="m-0">GymChallenge</h2>
                    <a className="cursor-pointer text-black text-xs hover:underline" href="http://">Ver más</a>
                </div>
                <div className="flex w-[90vw] overflow-x-scroll whitespace-nowrap">
                    <img src="imagen1.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen2.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen3.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    {/* Añade más imágenes según sea necesario */}
                </div>
            </article>
            <article className="mt-[4rem] w-[21rem]">
                <div className="flex justify-between items-center mb-[.5rem]">
                    <h2 className="m-0">GymChallenge</h2>
                    <a className="cursor-pointer text-black text-xs hover:underline" href="http://">Ver más</a>
                </div>
                <div className="flex w-[90vw] overflow-x-scroll whitespace-nowrap">
                    <img src="imagen1.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen2.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen3.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    {/* Añade más imágenes según sea necesario */}
                </div>
            </article>
            <article className="mt-[4rem] w-[21rem]">
                <div className="flex justify-between items-center mb-[.5rem]">
                    <h2 className="m-0">GymChallenge</h2>
                    <a className="cursor-pointer text-black text-xs hover:underline" href="http://">Ver más</a>
                </div>
                <div className="flex w-[90vw] overflow-x-scroll whitespace-nowrap">
                    <img src="imagen1.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen2.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen3.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    {/* Añade más imágenes según sea necesario */}
                </div>
            </article>
            <article className="mt-[4rem] w-[21rem]">
                <div className="flex justify-between items-center mb-[.5rem]">
                    <h2 className="m-0">GymChallenge</h2>
                    <a className="cursor-pointer text-black text-xs hover:underline" href="http://">Ver más</a>
                </div>
                <div className="flex w-[90vw] overflow-x-scroll whitespace-nowrap">
                    <img src="imagen1.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen2.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen3.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    <img src="imagen4.jpg" className="bg-black w-[10rem] h-[10rem] flex-shrink-0 mr-4" alt="" />
                    {/* Añade más imágenes según sea necesario */}
                </div>
            </article>



        </section>
    )
}