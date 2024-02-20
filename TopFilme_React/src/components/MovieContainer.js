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
            <div className="fixed border mb-4 bg-white w-full h-28">
                <h1>Movie X</h1>

                <input
                    className="border mb-4"
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
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />}
            </div>
            <div className="pt-32">
                <div>{message}</div>
              
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 ">

                    {movies.map((movie) => {
                        return (
                            <Movie
                                date={movie.Year}
                                imageUri={movie.Poster}
                                title={movie.Title}
                                rating={movie.Year}
                            />
                        );
                    })}
                </div>
            </div>

        </div>
    );
}