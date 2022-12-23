import React, {useState} from 'react';
import Data from './data.json';
import './App.css';

function App() {
  const[searchValue,setSearchValue]=useState("");

  return (
    <div className="container">
      <h2>Urla Gezilecek Yerler</h2>
      <div className='inputContainer'>
        <input className='search' type="text" placeholder='Gezilecek Yer Ara..' onChange={(e)=>setSearchValue(e.target.value)}>

        </input>
      </div>
      <div className='dataContainer'>
        {
          Data
          .filter((val)=>{
            if(searchValue==""){
              return val;
            }else if(val.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
              return val;
            }
          }).map((val)=>{
            return (
              <div className="data" key={val.id}> 
                <img src={val.image}></img>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            )

          })
        }

      </div>
     
    </div>
  );
}

export default App;
