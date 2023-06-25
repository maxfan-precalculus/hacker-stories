import React from 'react'
import {useState, useEffect} from 'react';

const App = () => {
  const initialStories =[{"title":"React","author":"Adeline"},
      {"title":"Research","author":"Sophia"},{"title":"Redux", "author":"Max"} ]
  const [stories, setStories] = useState([]);

  // return a simulation promise
  const getAsyncStories = () => {
    return new Promise( (resolve) => {
      setTimeout( () => resolve({data:{stories:initialStories}}),3000)
    })
  }

  useEffect( () => { 
    getAsyncStories().then(result => {
      setStories(result.data.stories);
    }
      );
  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleRemove = (item) => {
    setStories(
      stories.filter( (story) => story.title !== item.title)
    );
  }

  const filteredStories = stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
    <Search handleSearch={handleSearch}></Search>
    <List stories={filteredStories} handleRemove={handleRemove}></List>
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
      <li><Item item={item} handleRemove={props.handleRemove}></Item></li>
    ))
   }
  </ul>
)
const Item = (props) => (
  <div>
 <label>{props.item.title}</label> 
 <label>{props.item.author}</label> 
 <button onClick={ () => props.handleRemove(props.item)}>Click to remove</button>
 </div>
)

export default App;
