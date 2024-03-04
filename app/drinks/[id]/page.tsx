import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id: number) => {
  try {
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch drinks");
    }
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};

const SingleDrinkPage = async ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log({ imgSrc });

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks page
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        // priority
        src={imgSrc}
        sizes="(max-width: 768px) 100vw, (max-width: 1200) 50vw"
        alt={title}
        width={300}
        height={300}
      />
    </div>
  );
};

export default SingleDrinkPage;
