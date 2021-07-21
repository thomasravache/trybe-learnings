import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['Comer', 'Dormir', 'Acordar']

function App() {
  return (
    <div className="App-format">
      <h1>Tasks:</h1>
      {Task('Terminar o exercício')}
      <h1>Appointments</h1>
      {appointments.map((appointment) => <li>{appointment}</li>)}
    </div>
    );
}

export default App;
