import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value, //Solo cambia la propiedad modificada
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }
    
    return {
        ...formState, //Pasar todas las propiedades del form una por una
        formState,
        onInputChange,
        onResetForm,
    }
}
