import './App.css';
import { connect } from "react-redux";
import {getCards, getStatuses} from "./redux/actions";

function App() {
  return (
    <div className="App">
      <h1>Kanban Thunk</h1>

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
