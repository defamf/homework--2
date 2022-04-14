import Button from "@mui/material/Button";

function Search() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"></img>
        <form>
          <input type="text" class="searchBar"></input>
        </form>
        <Button variant="contained" type="submit" form="form1" value="Submit">
          Search
        </Button>
      </header>
    </div>
  );
}

export default Search;
