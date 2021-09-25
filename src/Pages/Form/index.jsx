import React, { useState } from 'react';
import { FormMain, FormInputs, ButtonSubmit } from './style';

const Form = () => {

    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [age, setAge] = useState('');
    
    const  handleSubmit = (event) => {

        event.preventDefault();
        
        if(name !== '' && surName !== '' && age !== ''){

           localStorage.setItem('name', name);
           localStorage.setItem('surName', surName);
           localStorage.setItem('age', age);
        
           window.location.href="showFormData";
           
        }else{
            alert('Preencha todos os campos!');
        }

        
    }

    return(
        <FormMain onSubmit={ handleSubmit }>
           <FormInputs type='text' placeholder='Nome' onChange={e => setName(e.target.value)} required/>
           <FormInputs type='text' placeholder='Sobrenome' onChange={e => setSurName(e.target.value)} required/>
           <FormInputs type='number' min='0' placeholder='Idade' onChange={e => setAge(e.target.value)} required/>
           <ButtonSubmit type='submit'>Enviar</ButtonSubmit>
        </FormMain>
    )
}

export default Form;