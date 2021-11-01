import {useState} from "react";
import Home from "./home";
import Header from "./header";
import AddForm from "./addForm";
import './App.css';


function App() {
    const [title, setTitle] = useState("Movie App");
    const [toggleView, setToggleView] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [searchedList, setSearchedList] = useState([])

    const [movieData, setMovieData] = useState(null)

    const handleFormSubmit = (formData) => {
        const editedMovie = [...movieList];
        editedMovie.push(formData);
        setMovieList(editedMovie);
        setSearchedList(editedMovie)
        setToggleView(false)
    }

    const handleFormEdit = (formData) => {
        console.log("edit FormData",formData);
        const movieListToEdit = [...movieList];
        // movieListToEdit.map((movie, index) => {
        //     console.log("check", movie, formData);
        //     if(movie.id === formData.id) {
        //         console.log("inside")
        //         // movie.name = formData.name;
        //         // movie.actor = formData.actor;
        //         movieListToEdit[index] = formData;
        //     }
        // });

        let index = movieListToEdit.findIndex(movie =>  {return movie.id === formData.id});
        if(index !== -1) {
            movieListToEdit[index] = formData;
        }

        console.log("movieListToEdit", movieListToEdit)
        setMovieList(movieListToEdit);
        setSearchedList(movieListToEdit);
        setMovieData(null);
        setToggleView(false);
    }

    const handleMovieDelete = (id) => {
        const movieEditList = [...movieList];
        const filteredMovie = movieEditList.filter(movie => {
            return movie.id !== id;
        })
        setMovieList(filteredMovie);
        setSearchedList(filteredMovie);
    }
    const handleToggleViewComponent = () => {
        setToggleView(!toggleView)
    }

    const handleMovieEdit = (movie) => {
        console.log("handleMovieEdit", movie);
        setMovieData(movie);
        setToggleView(!toggleView)
    }
    const handleMovieSearch = (value) => {
        const originalList = [...movieList];
        const filteredList = originalList.filter(movie => {
            return (
                movie.name.toLowerCase().indexOf(value.toLowerCase()) !== -1||
                    movie.actor.toLowerCase().indexOf(value.toLowerCase()) !== -1
            )
        });
        setSearchedList(filteredList);
    }

  return (
      <div>
          <Header title={title}
                  handleToggleView={handleToggleViewComponent}
                  toggleView={toggleView}
                  handleSearch={handleMovieSearch}
          />
          <main style={{marginTop: "55px"}}>
              {toggleView ? <AddForm
                      handleSubmit={handleFormSubmit}
                      movieData={movieData}
                      handleEdit={handleFormEdit}
                  /> :
                  <Home movies={searchedList}
                        handleMovieEdit={handleMovieEdit}
                        handleDelete={handleMovieDelete}
                  />}
          </main>
      </div>

  );
}

export default App;
