import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation=(name)=>{
        const expense={
            name:name,
            cost:10
        };
        dispatch({
            type:'DECREASE_EXPENSE',
            payload:expense
        });
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><button className="increase-btn" onClick={event=> increaseAllocation(props.name)}><span><FontAwesomeIcon icon={faPlus} /></span></button></td>
        <td><button className="decrease-btn" onClick={event=> decreaseAllocation(props.name)}><span><FontAwesomeIcon icon={faMinus} /></span></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
