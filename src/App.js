import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {
        name: "Erwin Smith", 
        role: "Commander", 
        img: "https://images.pexels.com/photos/19554075/pexels-photo-19554075.jpeg",
      },
      {
        name: "Levi Ackerman", 
        role: "Commander", 
        img: "https://images.pexels.com/photos/19564637/pexels-photo-19564637/free-photo-of-levi.jpeg",
      },
      {
        name: "Eren Jaeger", 
        role: "Survey Corps", 
        img: "https://images.pexels.com/photos/19564649/pexels-photo-19564649.jpeg",
      },
      {
        name: "Mikasa Ackerman", 
        role: "Survey Corps", 
        img: "https://images.pexels.com/photos/19564661/pexels-photo-19564661/free-photo-of-mikasa.jpeg",
      },
      {
        name: "Armin Arlert", 
        role: "Survey Corps", 
        img: "https://images.pexels.com/photos/19564668/pexels-photo-19564668/free-photo-of-armin.jpeg",
      },
      {
        name: "Hange  Zoë", 
        role: "Commander", 
        img: "https://images.pexels.com/photos/19564675/pexels-photo-19564675/free-photo-of-hange.jpeg",
      },
    ]
  );

  const showEmployees = true;
  return (
    <div className="App">

      {showEmployees ? (
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}
      />
      <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            return (
              <Employee 
              key={uuidv4()}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
              />
            );
          })}
      </div>
      </>
      ) : (
        <p>You cannot see the employees</p>
      )}
      
    </div>
  );
}

export default App;
