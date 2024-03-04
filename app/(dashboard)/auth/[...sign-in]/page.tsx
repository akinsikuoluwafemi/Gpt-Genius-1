import React from "react";

interface SignInPageProps {
  params: {
    "sign-in": string;
  };
}

const SignInPage = ({ params }: SignInPageProps) => {
  console.log({ params });
  return <h1 className="text-7xl">SignInPage</h1>;
};

export default SignInPage;
