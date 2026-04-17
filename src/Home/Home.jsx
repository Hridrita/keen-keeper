import React, { Suspense } from "react";

import Banner from "./Banner";
import AllFriends from "./AllFriends";


const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Suspense 
        fallback={
          <div className="flex justify-center items-center min-h-50 w-full">
            <span className="loading loading-spinner loading-lg text-success"></span>
            <span className="ml-2 font-medium text-success">Loading friends...</span>
          </div>
        }
      >
        <AllFriends />
      </Suspense>
    </div>
  );
};

export default Home;
