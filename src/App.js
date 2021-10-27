import {useState} from "react";
import Home from "./home";
import Header from "./header";
import AddForm from "./addForm";
import './App.css';


function App() {
    const [title, setTitle] = useState("Movie App");
    const [toggleView, setToggleView] = useState(false);
    const [movieList, setMovieList] = useState([
        {
            id: 'qwertyu',
            name: "Minnal murali",
            year: 2021,
            actor: 'Tovino',
            rating: 4.5,
            languages: ['malayalam'],
            description: "Malayalam movie",
            certificate: true,
        },
        {
            id: 'asdfghjk',
            name: "Malik",
            year: 2015,
            actor: 'Fahad',
            rating: 4.0,
            languages: ['malayalam', 'hindi'],
            description: "Malayalam + Hindi movie",
            certificate: false,
        },
        {
            id: 'zxcvbnmb',
            name: "kuruthi",
            year: 2021,
            actor: 'PrithviRaj',
            rating: 4.3,
            languages: ['malayalam', "english", "thamil"],
            description: "Malayalam  engish tamil movie",
            certificate: false,
        }
    ]);

    const handleToggleViewComponent = () => {
        setToggleView(!toggleView)
    }

  return (
      <div>
          <Header title={title}
                  handleToggleView={handleToggleViewComponent}
                  toggleView={toggleView}
          />
          <main style={{marginTop: "55px"}}>
              {toggleView ? <AddForm /> : <Home movies={movieList}/>}
          </main>
      </div>

  );
}

export default App;
