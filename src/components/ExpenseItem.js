import './ExpenseItem.css';

function ExpenseItem() {
  return (
  <div className="expense-item">
    <div className="expense-item__description">
      March 28th, 2021
    </div>
    <div className="expense-item__description">
      Car Insurance
    </div>
    <div className="expense-item__price">
      $294.67
    </div>
  </div>
  );
};

export default ExpenseItem;
