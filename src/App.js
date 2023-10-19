import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {

  return (
    <div >
      <h2>Let's Get Started!</h2>
      <ExpenseItem></ExpenseItem>           {/* first letter will be uppercase so that react is able to detect that this is a custom component */ }
    </div>
  );
}

export default App;
