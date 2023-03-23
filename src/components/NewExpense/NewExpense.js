import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) =>{
    const saveExpenseDataHandler = (data) => {
        const expenseData = {...data, id: Math.random().toString()};
        props.onNewExpenseAdded(expenseData);
    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>)
};

export default NewExpense;