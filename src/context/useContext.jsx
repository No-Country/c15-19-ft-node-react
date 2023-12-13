import { createContext, useContext, useReducer } from 'react';

const MyContext = createContext();

const initialState = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkTerms: false,
    form2Data: null,
};

const registrationReducer = (state, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_CAMPO':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return initialState;
        case 'SET_FORM2_DATA':
            return { ...state, form2Data: action.data };
        default:
            return state;
    }
};

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(registrationReducer, initialState);

    const updateField = (field, value) => {
        dispatch({ type: 'ACTUALIZAR_CAMPO', field, value });
    };

    const resetForm = () => {
        dispatch({ type: 'RESET' });
    };

    const setForm2Data = (data) => {
        dispatch({ type: 'SET_FORM2_DATA', data });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Lógica para enviar los datos al backend, puedes usar state.form2Data y otros campos según tus necesidades
        console.log('Datos enviados al backend:', state);
        // Luego puedes reiniciar el formulario
        resetForm();
    };

    return (
        <MyContext.Provider value={{ state, updateField, resetForm, handleSubmit, setForm2Data }}>
            {children}
        </MyContext.Provider>
    );
};

export default function useMyContext() {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error('useMyContext debe ser utilizado dentro de un ContextProvider');
    }

    return context;
}
