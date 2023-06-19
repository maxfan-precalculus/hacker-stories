import React from 'react'
import {useState} from 'react';

const App = () => {
  const stories =[{"title":"React","author":"Adeline"},
      {"title":"Research","author":"Sophia"},{"title":"Redux", "author":"Max"} ]
  const [searchTerm, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const filteredStories = stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
    <Search handleSearch={handleSearch}></Search>
    <List stories={filteredStories}></List>
    </div>
  );
}

const Search = (props) => (
  <div>
      <label htmlFor='search'>Search:</label>
      <input id='search' onChange={props.handleSearch}></input>
  </div>

)
const List = (props) => (
  <ul>
   {props.stories.map( (item) => (
      <li><Item item={item}></Item></li>
    ))
   }
  </ul>
)
const Item = (props) => (
  <div>
 <label>{props.item.title}</label> 
 <label>{props.item.author}</label> 
 </div>
)

export default App;
