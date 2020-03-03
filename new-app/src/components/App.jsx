import React from "react";
import moviesData from "../moviesData";
import MovieItem from "./MovieItem";
// import "../styles.css"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
  }

  removeMovie = movie => {
    const updateMovies = this
      .state
      .movies
      .filter(item => {
        return item.id !== movie.id;
      })
    this.setState({movies: updateMovies})
  }

  addMovie = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({moviesWillWatch: updateMoviesWillWatch})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this
                .state
                .movies
                .map((movie) => {
                  return (
                    <div className="col-6 mt-4" key={movie.id}>
                      <MovieItem
                        movie={movie}
                        removeMovie={this.removeMovie}
                        addMovie={this.addMovie}/>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className="col-3 mt-4">
            <p>Will Watch: {this.state.moviesWillWatch.length}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
