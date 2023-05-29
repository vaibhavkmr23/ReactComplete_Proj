import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2023, 5, 23);
  // const expenseTitle = "Car Insurance";
  // const expeseAmount = 295.54;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-tem__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
