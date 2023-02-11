import React from "react";
import { Background } from "../Background/Background";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  return (
    <div className="isolate bg-white">
      <Background />
      <Navbar />
      <main>
        <div className="mx-auto py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};
