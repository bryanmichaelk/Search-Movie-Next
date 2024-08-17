"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Error({error}) {
    useEffect(() => {
        console.log(error)
    }, [error]);
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Error
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {error.message}
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-blue-600 hover:bg-primary-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
