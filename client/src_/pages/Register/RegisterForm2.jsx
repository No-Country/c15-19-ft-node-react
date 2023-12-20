import { useState } from "react";
import "./Register.css";
import { IoMdArrowBack } from "react-icons/io";

export default function SigninForm2({
  setCurrentForm,
  setFormData,
  formData,
  handleSubmitBackend,
  setTitle,
}) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getMaximumDate = () => {
    const dateCurrent = new Date();
    dateCurrent.setFullYear(dateCurrent.getFullYear() - 18);
    return dateCurrent.toISOString().split("T")[0];
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "* Obligatorio";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "* Obligatorio";
    }
    if (!formData.dateBirth) {
      newErrors.dateBirth = "* Obligatoria";
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar los terminos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const response = await handleSubmitBackend(formData);
      if (response.status === 400) {
        setLoading(false);
        setErrors({ back: response.error });
      }

      if (response.status === 200) {
        setLoading(false);
        setCurrentForm(3);
        setTitle("¡Cuenta creada!");
      }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]">
      <div className="flex w-full ml-4 lg:ml-96">
        <IoMdArrowBack
          className="text-3xl text-black border-2 rounded-3xl border-black dark:text-white"
          onClick={() => {
            setFormData((prevData) => ({
              ...prevData,
              acceptTerms: false,
            }));
            console.log(formData);
            setCurrentForm(1);
          }}
        />
      </div>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="label--container__div">
          <label className=" dark:text-white text-xs" htmlFor="name">
            Nombre
          </label>
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <input
          className="input--registre__user dark:placeholder:text-gray-500"
          placeholder="Nombre"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChangeInput}
        />
        <div className="label--container__div">
          <label className=" dark:text-white text-xs " htmlFor="lastname">
            Apellido
          </label>
          {errors.lastname && (
            <p className="text-red-500 text-xs">{errors.lastname}</p>
          )}
        </div>
        <input
          className="input--registre__user dark:placeholder:text-gray-500"
          placeholder="Apellido"
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChangeInput}
        />
        <div className="label--container__div">
          <label className=" dark:text-white text-xs" htmlFor="dateBirth">
            Fecha de Nacimiento
          </label>
          {errors.dateBirth && (
            <p className="text-red-500 text-xs">{errors.dateBirth}</p>
          )}
        </div>
        <input
          className="input--registre__user dark:placeholder:text-gray-500"
          placeholder="Fecha de Nacimiento"
          type="date"
          id="dateBirth"
          name="dateBirth"
          value={formData.dateBirth}
          onChange={handleChangeInput}
          max={getMaximumDate()}
        />
        <label
          className="label--container__div dark:text-white text-xs"
          htmlFor="gender"
        >
          Género
        </label>
        <select
          className="input--registre__user dark:placeholder:text-gray-500"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChangeInput}
        >
          <option value="" disabled>
            Genero
          </option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <label className="flex justify-start items-center label--container__div dark:text-white text-xs mb-">
          <input
            className="h-4 w-4 mr-2"
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            onChange={handleChangeInput}
          />
          Acuerdo de términos y uso
        </label>
        {errors.acceptTerms && (
          <p className="text-red-500 text-xs">{errors.acceptTerms}</p>
        )}

        <div className="flex flex-col items-center space-y-6">
          {" "}
          <button
            className="w-[10rem] h-[3rem] mx-auto mt-[1rem] bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid text-white hover:text-TextGreen active:text-white rounded-3xl"
            type="submit"
          >
            Crear
          </button>
          {loading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-GreenDefaultSolid"></div>
            </div>
          )}
        </div>
      </form>

      <div className="mx-6 mt-2">
        {errors.back && <p className="text-red-500 text-xs">{errors.back}</p>}
      </div>
    </section>
  );
}
