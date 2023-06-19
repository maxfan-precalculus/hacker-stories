import React from 'react'
import {useState} from 'react';

const App = () => {
  const stories =[{"title":"React","author":"Adeline"},
      {"title":"Research","author":"Sophia"}]
  const [search, setSearch] = useState();
  const filteredStories = stories.filter((item) => item.title.toLowerCase == search);
  return (
    <div>
      <Search></Search>
      <List stories={filteredStories}></List>
    </div>
  );
}

const Search = (props) => {
  <div>
      <label htmlFor='search'>Search:</label>
      <input id='search'></input>
  </div>

}
const List = (props) => (
   props.stories.map( (item) => (
      <li><Item item={item}></Item></li>
    )
   )
)
const Item = (props) => (
  <div>
 <label>{props.item.title}</label> 
 <label>{props.item.author}</label> 
 </div>
)

export default App;
