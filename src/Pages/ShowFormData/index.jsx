import { ContainerData, Text } from './style';
import { Link } from 'react-router-dom';

import './LinkBack.css';

const ShowFormData = () => {

    const name = localStorage.getItem('name');
    const surName = localStorage.getItem('surName');
    const age = localStorage.getItem('age');

    return(
        <ContainerData>
            <Text>Nome: { name }</Text>
            <Text>Sobrenome: { surName }</Text>
            <Text>Idade: { age }</Text>
            <Link id="link" to={'/'}>Voltar</Link>
        </ContainerData>
    )
}

export default ShowFormData;