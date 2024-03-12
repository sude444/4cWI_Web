import React from 'react'
import Movie from "./MovieBox";

function MovieGrid({ movies }) {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-2 gap-9 p-8 ">

            {movies.map((movie) => {
                console.log(movie);
                return (
                    <Movie
                        date={movie.Year}
                        imageUri={movie.Poster}
                        title={movie.Title}
                        plot={movie.Plot}
                    />
                );
            })}
        </div>
    )
}

export default MovieGrid
