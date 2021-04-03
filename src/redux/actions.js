import axios from "axios";

export function getStatuses () {
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(res => {
                dispatch({
                    type: 'GET_STATUSES',
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log("couldn't get statuses");
            })
    }
};

export function getCards () {
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log("couldn't get cards")
            })
    }
}

export function deleteCard (cardId) {
    return (dispatch) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${cardId}`)
            .then(res => {
                dispatch(getCards())
            })
            .catch(err => {
                console.log("couldn't delete a card")
            })
    }
}
