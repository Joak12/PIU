import Click from './components/Click'
import './App.css'
import ListCars from './components/ListCars'
import FilterCar from './components/FilterCar'

function App() {
  
  return (
    <>
    <Click></Click>
    <ListCars></ListCars>
    <br></br>

    <h1>Carros Vermelhos:</h1>
    <FilterCar></FilterCar>
    </>
  )
}

export default App