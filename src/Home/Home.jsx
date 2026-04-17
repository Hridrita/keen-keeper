import React, { Suspense } from "react";

import Banner from "./Banner";
import AllFriends from "./AllFriends";


const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
      <AllFriends></AllFriends>
    </Suspense>
    </div>
  );
};

export default Home;
