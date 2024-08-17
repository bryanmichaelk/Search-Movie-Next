"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/layout/Layout";
import ListMovie from "../components/organisms/ListMovie";
import Genres from "../components/molecules/Genres";
import axios from "axios";
import useSWR from "swr";
import Loading from "@/app/loading";
import { favourites } from "../services/favouritemovie.service";


const MoviePage = () => {
  const [value, setValue] = useState("");
  const [fetchApi, setFetchApi] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [favouritesMovie, setFavourites] = useState([]);

  useEffect(() => {
    console.log(favourites);
    setFavourites(favourites);
  }, []);

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    "https://freetestapi.com/api/v1/movies",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setFetchApi(data);
      setFilteredMovies(data); // Initialize filtered movies with all movies
      extractGenres(data);
    }
  }, [data]);

  const extractGenres = (movies) => {
    const genreSet = new Set();
    movies.forEach((movie) => {
      movie.genre.forEach((genre) => {
        genreSet.add(genre);
      });
    });
    setGenres(Array.from(genreSet));
    console.log(genres);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = fetchApi.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
    setSelectedGenre("");
  };

  const handleClick = (e) => {
    const genre = e.target.name;
    console.log(genre);
    setSelectedGenre(genre);
    if (genre === "favourites") {
      setFilteredMovies(favouritesMovie);
    } else {
      const filtered = fetchApi.filter((movie) =>
        movie.genre.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <MainLayout
      withNavbar
      withFooter
      onChange={handleInputChange}
      onSubmit={handleSubmit}
      withSearch
    >
      <section className="pt-[120px] px-8 flex flex-col gap-8 max-w-[1280px] m-auto pb-8 min-h-screen">
        {isLoading && <Loading />}
        {error && <p className="text-red-600 font-bold">Error!: {error}</p>}
        {!isLoading && !error && (
          <>
            <Genres
              genres={genres}
              onClick={handleClick}
              selectedGenre={selectedGenre}
            />
            <ListMovie contents={filteredMovies} />
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default MoviePage;
