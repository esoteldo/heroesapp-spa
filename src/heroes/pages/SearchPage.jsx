import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"


export const SearchPage = () => {
const navigate=useNavigate();

const {searchText,onInputChange}=useForm({
  searchText:''
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
        <div className="alert alert-primary">
          Searh a hero
        </div>
        <div className="alert alert-danger">
          not hero with <b>ABC</b>
        </div>
      </div>
    </div>
    </>
  )
}
