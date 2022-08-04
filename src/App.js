import './App.css';
import {useState} from "react";

const reducer = (state, action) => {

  const {type, payload} = action

  switch (type) {
    case 'addCat':
      return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
    case "deleteCat":
      return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
  }
}


function App() {

  const [catValue, setCatValue] = useState('');
  const [dogValue, setDogValue] = useState('');
  return (
    <div >

    </div>
  );
}

export default App;
