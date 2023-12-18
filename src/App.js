import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">

      {showEmployees ? (
      <>
          <Employee name="Hashim" role="Intern"/>
          <Employee name="Abby"/>
          <Employee name="John"/>
      </>
      ) : (
        <p>You cannot see the employees</p>
      )}
      
    </div>
  );
}

export default App;
