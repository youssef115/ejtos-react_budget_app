import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,currency } = useContext(AppContext);
    const [bud,setBud]=React.useState(budget);


    const handleChange=(e)=>{
       
       if(bud>20000){
            alert("you can't depass 20000")
            setBud(20000)
       }else{
        setBud(e.target.value)
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: bud,
        });
       }
      
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input max={20000} type="number" value={bud} onChange={handleChange} step={10}/></span>
        </div>
    );
};

export default Budget;
