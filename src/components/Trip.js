import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Trip.css';



const Trip = (tripdetails) => {



    return (
        <div>
            
        <div flex-column className= 'tripgroupbutton'>
        <ButtonGroup>
            <Button variant="outline-secondary" className= 'tripgroupbutton' id='tripbutton'>
            <h4>Trip Name: {tripdetails.name}</h4>
            <div><p>{tripdetails.location}</p></div>
            {/* <span onClick={() => {likeCard(card)}}></span> */}
            </Button> 
            <Button>Delete</Button>
        </ButtonGroup>
        </div>
        </div>
    );
};

export default Trip;