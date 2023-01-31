import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllocationForm from "./components/AllocationForm"
import ExpenseList from "./components/ExpenseList"
import Budget from "./components/Budget"
import Remaining from "./components/Remaining"
import ExpenseTotal from "./components/ExpenseTotal"
import DropdownMenu from "./components/Dropdown"

// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
               <h1> Company's Budget Allocation</h1> 
                   <div className="row mt-3">
                        <div className="col-sm">
                        <Budget/>
                        </div>
                        <div className="col-sm">
                        <Remaining/>
                        </div>
                        <div className="col-sm">
                        <ExpenseTotal/>
                        </div>
                        <div className="col-sm">
                        <DropdownMenu/>
                        </div>
                        </div>
                <h1>Allocation </h1> 
                <ExpenseList/>
                <h1>Change Allocation </h1>
                <AllocationForm/>
            </div>
        </AppProvider>
    );
};
export default App;
