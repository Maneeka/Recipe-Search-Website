import React, {useState} from 'react'
import Axios from 'axios'
import './App.css'
import Recipe from './components/Recipe'
import {v4 as uuidv4} from 'uuid'

const App = () => {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const APP_ID = "e92dc99d"
    const APP_KEY = "5460a9b825f2fd04a20dd04eedc23c83"
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
    const getData = async() =>{
        const result = await Axios.get(url);
        setRecipes(result.data.hits)
        console.log(result)
        setQuery("")
        uncheckAll()
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const uncheckAll = () => {
        let boxes = document.getElementsByClassName("boxes")
        boxes = Array.from(boxes)
        boxes.forEach(element => {
            element.checked = false;
        });

    }

    const addCuisine = (c) => {
        url += `&cuisineType=${c}`
    }
        

    return (
        <div className="App">
            <h1>Food search app</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input type="text" placeholder="Enter Food Item..." autoComplete="off" 
                onChange={onChange} value={query}></input>
                
                
                <h3>cuisine type(s):</h3>
                <div className="Cuisine-types">
                    <label>
                        <input className="boxes" type="checkbox" name="American" id="American" value="American" onChange={() => addCuisine("American")} ></input>American
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Asian" id="Asian" value="Asian" onChange={() => addCuisine("Asian")} ></input>Asian
                    </label> 

                    <label>
                        <input className="boxes" type="checkbox" name="British" id="British" value="British" onChange={() => addCuisine("British")} ></input>British
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Caribbean" id="Caribbean" value="Caribbean" onChange={() => addCuisine("Caribbean")} ></input>Caribbean
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Central-Europe" id="Central-Europe" value="Central-Europe" onChange={() => addCuisine("Central%20Europe")} ></input>Central Europe
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Chinese" id="Chinese" value="Chinese" onChange={() => addCuisine("Chinese")} ></input>Chinese
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="French" id="French" value="French" onChange={() => addCuisine("French")} ></input>French
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Indian" id="Indian" value="Indian" onChange={() => addCuisine("Indian")} ></input>Indian
                    </label>  

                    <label>
                        <input className="boxes" type="checkbox" name="Italian" id="Italian" value="Italian" onChange={() => addCuisine("Italian")} ></input>Italian
                    </label>  

                    <label>
                        <input className="boxes" type="checkbox" name="Japanese" id="Japanese" value="Japanese" onChange={() => addCuisine("Japanese")} ></input>Japanese
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Kosher" id="Kosher" value="Kosher" onChange={() => addCuisine("Kosher")} ></input>Kosher
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Mediterranean" id="Mediterranean" value="Mediterranean" onChange={() => addCuisine("Mediterranean")} ></input>Mediterranean
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Mexican" id="Mexican" value="Mexican" onChange={() => addCuisine("Mexican")} ></input>Mexican
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Middle-Eastern" id="Middle-Eastern" value="Middle-Eastern" onChange={() => addCuisine("Middle%20Eastern")} ></input>Middle Eastern
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Nordic" id="Nordic" value="Nordic" onChange={() => addCuisine("Nordic")} ></input>Nordic
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="South-American" id="South-American" value="South-American" onChange={() => addCuisine("South%20American")} ></input>South American
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="South-East-Asian" id="South-East-Asian" value="South-East-Asian" onChange={() => addCuisine("South%20East%20Asian")} ></input>South East Asian
                    </label>

                    <label>
                        <input className="boxes" type="checkbox" name="Eastern-Europe" id="Eastern-Europe" value="Eastern-Europe" onChange={() => addCuisine("Eastern%20Europe")} ></input>Eastern Europe
                    </label>  <br/>
                </div>

                <input type="submit" value="Search"></input>        

                <div className="recipes">
                    {recipes !== [] && 
                    recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
                </div>  
            </form>
        </div>
    )
}

export default App
