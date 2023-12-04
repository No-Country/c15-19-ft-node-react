import EmailCard from "/emailcard.png"
export default function SigninForm3() {
    return (
        <section className='flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]'>
            <div className="mt-[-4rem] flex flex-col items-center justify-center">
                <img src={EmailCard} alt="" />
                <h1 className="font-bold text-2xl mt-[2rem] text-gray-700 text-center">POR FAVOR VERIFIQUE SU CORREO ELECTRONICO</h1>
                <p className="w-[21rem] text-center text-gray-700 mt-[1rem]">Su cuenta ha sido creada con exito! solo un paso mas.</p>
            </div>
            <button className="bg-Green w-[10rem] h-[3rem] text-white rounded-3xl mt-[3rem]">Verificar Email</button>
        </section>
    )
}