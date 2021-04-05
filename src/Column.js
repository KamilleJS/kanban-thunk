import { connect } from "react-redux";

import CardItem from "./CardItem";

function Column(props){

        return(
        <div className="col text-capitalize" >
            <h3>{props.column.status}</h3>
            {props.cards.filter(el => el.status === props.column.status).map(el => <CardItem key={el._id} card={el}/>)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
})

export default connect(mapStateToProps)(Column);