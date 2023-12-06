import "./login.css" ;
export default function Login(){
    return(
<section className="flex flex-col justify-center items-center h-[80vh]">
    <div className="">
        <form action="login" className="w-[100vw]: px-4 h-screen flex flex-col justify-center  md:w-[100%] text-base md:text-[20px]   ">

            <label htmlFor="Email" className="" >Email:</label>
                <input type="email" placeholder= "example@gmail.com" required="@gmail.com" className="input--registre__user md:min-w[20rem]	 " />
            
            <label htmlFor="Password">Password: </label>
        
                <input type="password" placeholder= "Password" required="" className=" input--registre__user " />

            <input type="submit" value="Login" className="input--registre__user  rounded outline outline-1 bg-[#001F3F] text-white	 " />

            <button className="  input--registre__user inline-flex items-center justify-center">
                <picture> <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png" alt="google-icon" className=" w-6 h-6 mx-4 " />
                </picture> 
                Login with Google</button>

            
        </form> 
    </div>
</section>
    )
    
}