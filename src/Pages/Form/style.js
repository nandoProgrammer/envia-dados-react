import styled from 'styled-components'

export const FormMain = styled.form`

    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 5px;

`;

export const FormInputs = styled.input`

    height: 50px;
    border-radius: 3px;
    border: none;
    padding: 0 10px;
    margin-top: 40px;
    background-color: #cecece;

`;

export const ButtonSubmit = styled.button`

    width: 100%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0 10px;
    margin-top: 20px;
    font-size: 30px;
    
    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }

`;