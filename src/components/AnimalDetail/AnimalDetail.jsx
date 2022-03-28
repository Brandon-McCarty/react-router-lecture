import {useParams} from 'react-router-dom';

function AnimalDetail () {

    //matches :id
const {id} = useParams();

    return (
        <h1>ANIMAAAAALLLLL {id}</h1>
    )
}

export default AnimalDetail;