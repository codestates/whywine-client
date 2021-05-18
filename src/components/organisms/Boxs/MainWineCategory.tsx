import React from "react";
import MainWineCard from "../../atoms/Cards/MainWineCard";

interface categoryType {
  category: string;
}

const MainWineCategory: React.FC<categoryType> = ({ category }) => {
  return (
    <div className="mainWineCategory">
      <h2 className="mainCategoryName">{category}</h2>
      <div className="mainWineCardBox">
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
        <MainWineCard />
      </div>
    </div>
  );
};

export default MainWineCategory;
