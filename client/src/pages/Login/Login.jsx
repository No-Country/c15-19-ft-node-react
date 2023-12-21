import { Link, useNavigate } from 'react-router-dom'
import "./login.css";
import { useState } from 'react'
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {auth, setAuth, loading} = useAuth()

  console.log(auth)
  console.log(loading)

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const {data} = await axios.post('https://challengeme-uy0s.onrender.com/auth/login', {email, password})
      
      localStorage.setItem('jsontoken', data.jsontoken)
      setAuth(data)
      console.log(data)
      navigate('/home')

    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  }

  return (
    <section className="flex flex-col justify-center items-center h-[80vh]">
      <div>
        <form
          action="login"
          className="w-[100vw]: px-4 h-screen flex flex-col justify-center  md:w-[100%] text-base md:text-[20px]   "
          onSubmit={handleSubmit}
        >
          <label htmlFor="Email">
            Email:
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            required="@gmail.com"
            className="inputRegistreUser md:min-w[20rem]	 "
            value={email}
            onChange={ e=> setEmail(e.target.value)}
          />

          <label htmlFor="Password">Password: </label>

          <input
            type="password"
            placeholder="Password"
            required=""
            className=" inputRegistreUser "
            value={password}
            onChange={ e=> setPassword(e.target.value)}
          />

          <input
            type="submit"
            value="Login"
            className="inputRegistreUser  rounded outline outline-1 bg-[#001F3F] text-white	 "
          />

          <button className="  inputRegistreUser inline-flex items-center justify-center">
            <picture>
              {" "}
              <img
                src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                alt="google-icon"
                className=" w-6 h-6 mx-4 "
              />
            </picture>
            Login with Google
          </button>
          <nav className="lg:flex lg:justify-between">
              <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="register"
              >
                ¿No tienes una cuenta? Registrate
              </Link>

        </nav>
        </form>


      </div>
    </section>
  );
}

export default Login