import {Card, Button, CardText, CardTitle} from "reactstrap";

function CardItem(props) {

    const {card} = props;
    return (
        <Card body outline color="primary">
            <CardTitle tag="h5">{card.name}</CardTitle>
            <CardText>{card.description}</CardText>
            <Button color="secondary">Button</Button>
        </Card>

    );
}

export default CardItem;