import { useState } from "react";
import Star from "./Star";

function Blocks({ dados }) {
  return (
    <div className="gap-4 flex grid-row- ">
      {dados.map(
        (data, key) =>
          key < 4 && (
            <ul className=" space-x-4 w-full  h-full   border-black shadow-lg rounded-xl">
              <li key={key} className=" p-2 rounded-md ">
                <img
                  className=" right-9 w-3/4 h-72 mx-3 scale-x-95 flex-grow-1 rounded-md object-cover"
                  src={data.image_url}
                  alt="ImageMovie"
                />
                <h4 className=" text-black mx-4 text-left text-xs font-Montserrat font-bold  rounded-md  ">
                  {data.title}
                </h4>
                <h6 className="text-gray-800 mx-4 text-left  text-xs font-Montserrat rounded-md space-y-2">
                  Ano de Lançamento: {data.year}
                </h6>
                <p className="text-gray-900 mx-4 text-left text-xs font-Montserrat rounded-md space-y-2 ">
                  {data.crew}
                </p>
                <button className="bottom-2 bg-violet-700 mx-4 p-1 gap-1 flex text-slate-50 w-24 h-7 rounded-xl items-center ">
                  <Star /> {data.rating}/10
                </button>
              </li>
            </ul>
          )
      )}
    </div>
  );
}
export default Blocks;
