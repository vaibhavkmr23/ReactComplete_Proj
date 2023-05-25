import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 5, 23);
  const expenseTitle = "Car Insurance";
  const expeseAmount = 295.54;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-tem__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expeseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
