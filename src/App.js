import {useState,useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-field/search-field.component";


const App=()=>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [filteredMonsters,setFilteredMonster]=useState(monsters)

  const onSearchChange=(event)=>{
    let searchFieldString=event.target.value.toLowerCase();
      setSearchField(searchFieldString);
}
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setMonsters(data));  
},[])

useEffect(()=>{
  let newFilteredMonster=monsters.filter((monster)=>{
    return monster.name.toLowerCase().includes(searchField);
  })
  setFilteredMonster(newFilteredMonster);
},[monsters,searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox className="monster-search-box" placeholder="Search Monster" handleChange={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}


export default App;
