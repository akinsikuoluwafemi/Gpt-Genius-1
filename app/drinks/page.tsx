import DrinksList from "@/components/DrinksList";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    //throw error
    if (!response.ok) {
      throw new Error("Failed to fetch drinks");
    }
    const data = await response.json();
    return data;
  } catch (e: any) {
    console.log(e);
  }
};

// /server component can be async
const DrinksPage = async () => {
  const data = await fetchDrinks();
  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
