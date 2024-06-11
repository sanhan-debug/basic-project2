import Card from 'react-bootstrap/Card';
import './data'
import { cars } from './data'
import '../css/Card.css'


function BasicExample({ car }) {

    const {
        id, model, mator_hecmi, ili, satildiği_zona, qiymet, image
    } = car;

    return (
        <div className="card-conatiner">
            <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} width={250} height={250} />
                    <Card.Body>
                        <Card.Title>{model}</Card.Title>
                        <Card.Text>
                            {qiymet}
                        </Card.Text>
                        <Card.Text>
                            <p>{ili},{mator_hecmi},{satildiği_zona}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}

export default BasicExample;