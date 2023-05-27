import React, { useEffect, useState } from "react"
import "./movieList.css"
import Cards from "../card/card"

const MovieSearch = ({ searchQuery }) => {
    console.log(searchQuery);
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [searchQuery])

    const getData = async() => {
        try{let url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery ? searchQuery : "popular"}&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzllYWMxZDljZjlkZmRiNTQ5ZDRlOGM3Y2EyNWFlZCIsInN1YiI6IjY0NzFlZmJlYmUyZDQ5MDEzM2EzZTkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zBK44n5EMd8FS5UVl_OO6trCqFYcFe6wQ83qLah8vHA'
            }
        };
        await fetch(url, options)
            .then(res => res.json())
            .then(data => setMovieList(data.results))}
    catch{
console.log('error')
    }}

    return (
        <div className="movie__list">
            <h2 className="list__title">{(searchQuery ? searchQuery : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieSearch