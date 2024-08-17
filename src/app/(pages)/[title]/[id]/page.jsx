"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/layout/Layout";
import { usePathname } from "next/navigation";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";
import Button from "@/app/components/atom/Button";
import Error from "../../error";
import { IoChevronBackOutline } from "react-icons/io5";
import {
  favourites,
  addFavourite,
  removeFavourite,
} from "@/app/services/favouritemovie.service";

export default function MovieDetail() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `https://freetestapi.com/api/v1/movies/${id}`,
    fetcher
  );

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (data) {
      setIsFavourite(favourites.includes(data));
    }
  }, [data]);

  const handleToFavourites = () => {
    if (favourites.includes(data)) {
      removeFavourite(data);
      setIsFavourite(false);
    } else {
      addFavourite(data);
      setIsFavourite(true);
    }
  };

  console.log(data);
  return (
    <MainLayout withNavbar withFooter>
      <section
        className={`min-h-screen  px-4 mb-10 ${isLoading ? "" : "pt-[110px]"}`}
      >
        {isLoading && <Loading />}
        {error && <Error error={error.message} />}
        {!isLoading && !error && (
          <div className="max-w-screen-xl p-8 mx-auto shadow-xl rounded-lg">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className=" max-w-md lg:max-w-lg flex justify-center items-center">
                <Image
                  className="w-full dark:hidden"
                  src={data.poster}
                  alt=""
                  width={400}
                  height={400}
                />
                <Image
                  className="w-full hidden dark:block"
                  src={data.poster}
                  alt=""
                  width={110}
                  height={400}
                />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {data.title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.floor(data.rating / 2) }).map(
                        (_, index) => (
                          <svg
                            key={`full-${index}`}
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        )
                      )}
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                      {data.rating}
                    </p>
                    <Link
                      href="#"
                      className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                    >
                      345 Reviews
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap items-center mt-4 gap-2">
                  {data.genre.map((genre, index) => {
                    return (
                      <span key={index} className="text-neutral-300 rounded-2xl px-4 py-1 flex justify-center items-center bg-gray-400">
                        {genre}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  {!isFavourite && (
                    <Button
                      onClick={handleToFavourites}
                      className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      Add to favorites
                    </Button>
                  )}
                  {isFavourite && (
                    <Button
                      onClick={handleToFavourites}
                      className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      Remove from favorites
                    </Button>
                  )}

                  <Link
                    href={data.trailer}
                    title=""
                    className="text-white  bg-orange-600 mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5  flex items-center justify-center"
                    role="button"
                  >
                    Trailer
                  </Link>
                </div>

                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  {data.plot}
                </p>
                <Link href="/">
                  <p className="text-gray-900 text-sm flex items-center gap-1 font-semibold">
                    <IoChevronBackOutline />
                    Back to Search
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
