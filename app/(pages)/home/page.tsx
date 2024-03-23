import React from "react";
import FeaturedVideo from "@/app/components/FeaturedVideo";
import RecentlyAdded from "@/app/components/RecentlyAdded";

const HomePage = async () => {
  return (
    <div>
      <FeaturedVideo />
      <RecentlyAdded />
    </div>
  );
};

export default HomePage;
