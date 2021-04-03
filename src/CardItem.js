import {Card, CardText, CardTitle, CardBody} from "reactstrap";
import ModalDelete from "./ModalDelete";

function CardItem(props) {
    const {card} = props;

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{card.name}</CardTitle>
                <CardText>{card.description}</CardText>
                <CardText>{card.status}</CardText>
                <CardText>Priority: {card.priority}</CardText>
                <ModalDelete id={card._id} name={card.name}/>
                <button className="btn btn-outline-primary">Update</button>
                <br/>
                <button type="button" className="btn btn-outline-secondary">←</button>
                <button type="button" className="btn btn-outline-secondary">↑</button>
                <button type="button" className="btn btn-outline-secondary">↓</button>
                <button type="button" className="btn btn-outline-secondary">→</button>
            </CardBody>
        </Card>

    );
}

export default CardItem;