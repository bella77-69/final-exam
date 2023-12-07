import { useState } from 'react'
import './App.css'
import foods from './data/foods'
import FoodList from './components/FoodList'

function App() {
  const [foodItems, setFoodItems] = useState(foods[0])
  const [search, setSearch] = useState('');

  const foodSelected = (food) => {
    setFoodItems(food)
  }

  const handleSearch = () => {
    return foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
  
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-lg-3">
            <h1 className="display-4">Food Items</h1>
          </div>
    <div className="col-md-8 col-lg-9">
            <input 
            type='text'
            className="form-control"
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
      
           <div className='row'>
            <FoodList foods={handleSearch()} foodSelected={foodSelected} search={search}/>
          </div>
          </div>
        </div>
      </div>

  )
}

export default App
