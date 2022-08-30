import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";
import {HeroCard} from "../components/HeroCard";

export const SearchPage = () => {
const navigate=useNavigate();
const location=useLocation();

const {q=''}=queryString.parse(location.search)

const heroes=getHeroesByName(q);

const showSearch=(q.length==0);
const showError=(q.length>0)&&(heroes.length==0);



const {searchText,onInputChange}=useForm({
  searchText:q
});

const onSearchSubmit=(event)=>{
event.preventDefault();
if(searchText.trim().length <=1 ) return;

navigate(`?q=${searchText.toLowerCase().trim()}`);
console.log({searchText});
}

  return (
    <>
    <h1>SearchPage</h1>
    <hr />
    <div className="row">

      <div className="col-5">
      <h4>Searching</h4>
      <hr />
      <form onSubmit={onSearchSubmit}>
        <input 
        type="text"
        placeholder="Search a Hero"
        className="form-control"
        name="searchText"
        autoComplete="off"
        value={searchText}
        onChange={onInputChange}
        />
        <button
        className="btn btn-outline-primary mt-1"
        >
          Search
        </button>
      </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />
        <div className="alert alert-primary" style={{display: showSearch ? '': 'none'}}>
          Searh a hero
        </div>
        <div className="alert alert-danger" style={{display: showError ? '': 'none'}}>
          not hero with <b>{ q }</b>
        </div>
        {
          heroes.map(heroe=>(
          <HeroCard key={heroe.id}{...heroe}/>))
        }
      </div>
    </div>
    </>
  )
}
