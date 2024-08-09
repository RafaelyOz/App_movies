'use client';

import { APP_DIR_ALIAS } from 'next/dist/lib/constants';
import './index.scss';
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types';




export default function MovieList(){
   const[movies, setMovies] = useState<Movie[]>([]);
   useEffect(()=>{
    getMovies();
   }, []);

   function getMovies() {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'eb648ec63f0f770b46471e7eb830f098',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
            
        });
    }

    return(
        <ul className="movie-list">
            { movies.map((movie)=>
          
                <MovieCard
                 key={movie.id}
                    movie={movie}               
                />
        ) }
           
        </ul>
    );
}