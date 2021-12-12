import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner!</h1>
      <p>Thank you for coming</p>
      <Menu nameOfDish = "pizza" price= "$19.99" numMealsServed = {9}>
        This pizza is made and imported from Sicily
      </Menu>
      <Menu nameOfDish = "pasta" price= "$24.99" numMealsServed = {7}>
        Pasta is freshly made in Rome
      </Menu>
    </div>
  );
}

export default App;
