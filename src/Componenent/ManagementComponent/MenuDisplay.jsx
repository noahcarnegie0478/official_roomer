import React, { useState } from "react";
import Card from "./Card";

function MenuDisplay({ data }) {
  const [chosenCategory, setChosenCategory] = useState(null);

  if (!data) return;

  const consoleTest = data => {
    console.log(data);
  };
  const resetData = data => {
    setChosenCategory(null);
  };
  return (
    <div className="category_section">
      {chosenCategory ? (
        <div className="rounded-lg flex justify-between items-center">
          <Card item={chosenCategory} action={resetData} />
          <div className="w-5 h-auto border-l-1 border-gray-200 "></div>
          {chosenCategory.items.map((item, index) => (
            <Card item={item} key={"cate" + index} action={consoleTest} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg flex justify-between items-center">
          {data.category.map((cat, index) => (
            <Card
              item={cat}
              key={"cate" + index}
              onClick={() => setChosenCategory(cat)}
              action={setChosenCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuDisplay;
