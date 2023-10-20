import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/Expenses/ExpenseItem';

const App = () => {

  const expenses = [
    {date: new Date(2021, 2, 29), title: 'Car insurance', amount: 294.67, location: 'jaipur'},
    {date: new Date(2021, 4, 6), title: 'jewellery', amount: 2000, location: 'mumbai'},
    {date: new Date(2021, 2, 17), title: 'bike', amount: 3500, location: "delhi"},
    {date: new Date(2021, 8, 4), title: 'shopping', amount: 315.7, location: "paris"},
    {date: new Date(2021, 1, 16), title: 'gift', amount: 20, location: 'new-york'}
  ]


//   return (
//     <div >
//       <h2>Let's Get Started!</h2>
//       <ExpenseItem
//         ExpenseDate = {expenses[0].date}
//         ExpenseTitle = {expenses[0].title}
//         ExpenseAmount = {expenses[0].amount}
//         locationOfExpenditure = {expenses[0].location}
//       ></ExpenseItem>           
//       <ExpenseItem
//         ExpenseDate = {expenses[1].date}
//         ExpenseTitle = {expenses[1].title}
//         ExpenseAmount = {expenses[1].amount}
//         locationOfExpenditure = {expenses[1].location}
//       ></ExpenseItem>  
//       <ExpenseItem
//         ExpenseDate = {expenses[2].date}
//         ExpenseTitle = {expenses[2].title}
//         ExpenseAmount = {expenses[2].amount}
//         locationOfExpenditure = {expenses[2].location}
//       ></ExpenseItem>  
//       <ExpenseItem
//         ExpenseDate = {expenses[3].date}
//         ExpenseTitle = {expenses[3].title}
//         ExpenseAmount = {expenses[3].amount}
//         locationOfExpenditure = {expenses[3].location}
//       ></ExpenseItem>  
//       <ExpenseItem
//         ExpenseDate = {expenses[4].date}
//         ExpenseTitle = {expenses[4].title}
//         ExpenseAmount = {expenses[4].amount}
//         locationOfExpenditure = {expenses[4].location}
//       ></ExpenseItem>  
      
//     </div>
//   );
// }


  return (
      <div>
        <h2>Expense Tracker</h2>
        {expenses.map((exp, index) => (
          // key = {index}
          <ExpenseItem
            ExpenseDate = {exp.date}
            ExpenseTitle = {exp.title}
            ExpenseAmount = {exp.amount}
            locationOfExpenditure = {exp.location}
          />
        ))
        }
      </div>  
  );

}



export default App;





{/*in </ExpenseItem>    first letter will be uppercase so that react is able to detect that this is a custom component */ }