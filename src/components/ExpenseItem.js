import './ExpenseItem.css';

const ExpenseItem = ()=>{
    return (
        <div className='expense-item'>
            <div>May @5 2023</div>
            <div className='expense-tem__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$295.54</div>
            </div>
        </div>
    )
}

export default ExpenseItem;