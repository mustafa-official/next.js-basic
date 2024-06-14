"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../meals/styles.module.css";
import Link from "next/link";

const Meals = () => {
  const [search, setSearch] = useState("b");
  const [allMeals, setAllMeals] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.meals.value);
  };
  const loadData = async () => {
    try {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      setAllMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allMeals);
  useEffect(() => {
    loadData();
  }, [search]);

  if (allMeals?.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="">
      <div className="mt-6">
        <form onSubmit={handleSearch}>
          <input
            name="meals"
            className="py-2 px-3 border border-violet-500"
            type="text"
            placeholder="Search meals.."
          />
          <button
            type="submit"
            className="py-2 px-3 bg-violet-500 border text-white  border-violet-500"
          >
            Search
          </button>
        </form>
        <h3 className={styles.text_violet}>Get Your Favorite One!</h3>
        <div className="grid grid-cols-3 gap-5 ">
          {allMeals?.map((meal) => (
            <div
              key={meal?.idMeal}
              className="p-4 border-2 mt-6 border-b-violet-500 rounded-md"
            >
              <Image
                className="w-full"
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={400}
              />
              <h2 className="text-2xl font-bold">{meal?.strMeal}</h2>
              <p className="mt-2">{meal?.strInstructions.slice(0, 200)}</p>
            </div>
          ))}
          {allMeals?.length === 0 && <p>No Data Found!</p>}
        </div>
      </div>
    </div>
  );
};

export default Meals;
