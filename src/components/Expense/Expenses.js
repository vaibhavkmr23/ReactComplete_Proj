import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expense.js", selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expenses) => {
          return (
            <ExpenseItem
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
