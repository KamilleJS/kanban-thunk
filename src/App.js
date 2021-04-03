import './App.css';
import { connect } from "react-redux";
import {getCards, getStatuses} from "./redux/actions";
import {useEffect} from "react";
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {

    useEffect(() => {
        props.getStatuses();
        props.getCards();
    }, [])

  return (
    <div className="App">
      <h1>Kanban Thunk</h1>
        <div className="container">
            <div className="row align-items-start" >
                {props.statuses.map(el => <Column key={el._id} column={el}/>)}
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
});

const mapDispatchToProps = (dispatch) => ({
    getStatuses: () => dispatch(getStatuses()),
    getCards: () => dispatch(getCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
