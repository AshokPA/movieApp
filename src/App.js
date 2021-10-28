import {useState} from "react";
import Home from "./home";
import Header from "./header";
import AddForm from "./addForm";
import './App.css';


function App() {
    const [title, setTitle] = useState("Movie App");
    const [toggleView, setToggleView] = useState(false);
    const [movieList, setMovieList] = useState([]);

    const [movieData, setMovieData] = useState(null)

    const handleFormSubmit = (formData) => {
        const editedMovie = [...movieList];
        editedMovie.push(formData);
        setMovieList(editedMovie)
        setToggleView(false)
    }
    const handleToggleViewComponent = () => {
        setToggleView(!toggleView)
    }

    const handleMovieEdit = (movie) => {
        console.log("handleMovieEdit", movie);
        setMovieData(movie)
    }

  return (
      <div>
          <Header title={title}
                  handleToggleView={handleToggleViewComponent}
                  toggleView={toggleView}
          />
          <main style={{marginTop: "55px"}}>
              {toggleView ? <AddForm
                      handleSubmit={handleFormSubmit}
                      movieData={movieData}
                  /> :
                  <Home movies={movieList}
                        handleMovieEdit={handleMovieEdit}/>}
          </main>
      </div>

  );
}

export default App;
