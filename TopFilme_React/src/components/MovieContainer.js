import React, { useEffect, useState } from "react";
import Movie from "./MovieBox";
import { Audio } from 'react-loader-spinner'

export default function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("Barbie");
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    console.log(movies);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://www.omdbapi.com?s=${searchQuery}&apikey=cea04f46`).then((res) =>
            res.json().then((data) => {
                if (data.Response == "False") {
                    console.log(data);
                    setMessage(data.Error);
                    setMovies([])
                } else {
                    setMovies(data.Search);

                }
                setIsLoading(false)


            })
        );
    }, [searchQuery]);

    const filterMovie = (filter) => {
        if (filter.length >= 3) {
            setMessage("");
            setSearchQuery(filter)
        }
    };
    return (
        <div>
            <div className="fixed border mb-1 bg-white w-full  p-1 text-UB">
                <div className="text-3xl font-medium text-center  ">
                <h1>Search for your favourite movies</h1>
                </div>
                <div className="text-center my-5 ">
                    <input
                        className="border mb-0 rounded-2xl text-center"
                        type="text"
                        placeholder="Search"
                        onChange={(el) => {
                            console.log(el.target.value);
                            filterMovie(el.target.value);
                        }}
                    />
                    
                    {isLoading && <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="pink"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />}
                </div>
              
            </div>
            <div className="pt-32">
                <div>{message}</div>
              
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
            </div>

        </div>
    );
}