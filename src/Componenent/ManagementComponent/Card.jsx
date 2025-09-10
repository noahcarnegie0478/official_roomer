import React from "react";

function Card({ item, action }) {
  return (
    <div
      className="flex flex-col items-center gap-2 w-20 h-20 bg-white p-2 rounded inset-shadow-sm"
      onClick={() => action(item)}
    >
      <div className="cat-image w-10 h-10 ">
        <img src={item.present_img} className="rounded-sm" />
      </div>
      <div className="title">
        <article>{item.title}</article>
      </div>
    </div>
  );
}

export default Card;
