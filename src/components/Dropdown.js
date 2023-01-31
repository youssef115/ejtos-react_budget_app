import React, { useState,useContext } from "react";
import { AppContext } from '../context/AppContext';
import "../App.css"
const DropdownMenu = () => {
    const {dispatch } = useContext(AppContext);
    const [selectedItem, setSelectedItem] = useState("£")



    const handleChange = (e) => {
        setSelectedItem(e.target.value)
        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: e.target.value,
        });
       
    }

    return (
        <div>
            <select id="select1" onChange={handleChange} defaultValue={selectedItem} className="menu">

                <option value="$" > $ Dollar</option>
                <option value="£" > £ Pound</option>
                <option value="€" > € Euro</option>
                <option value="₹" > ₹ Rupee</option>

            </select>
        </div>


    );
};

export default DropdownMenu;