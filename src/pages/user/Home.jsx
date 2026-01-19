import { useState } from "react";
import MainPage from "../../components/user/MainPage";
import ExploreMenu from "../../components/user/ExploreMenu";
import FoodDisplay from "../../components/user/FoodDisplay";
export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* Components */}
      <MainPage />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}
