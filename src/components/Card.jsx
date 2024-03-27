import { useState } from "react";

function Card({ id, name, info, image, price, removetourHandler }) {
  const [readmore, setReadmore] = useState(false);

  let description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <>
      <div className="card w-[350px] h-[600px] m-[1rem] p-[1rem] flex flex-col place-content-center items-center border-2 bg-gray-100 rounded-xl">
        <img src={image} className="image w-[350px] h-[300px] object-cover" />
        <div className="tour-info mx-[5px] my-[20px] flex flex-col justify-center items-start">
          <div className="tour-details">
            <p className="tour-price text-green-500 font-bold">
              &#8377; {price}
            </p>
            <p className="tour-name font-bold text-lg">{name}</p>
          </div>

          <div className="tour-description">
            {description}
            <span
              className="read-more text-blue-500 cursor-pointer"
              onClick={readmoreHandler}
            >
              {readmore ? `show less` : `read more`}
            </span>
          </div>
        </div>

        <button
          className="btn-red bg-red-400 rounded-xl text-[1.2rem] p-2 text-gray-800 font-bold"
          onClick={() => removetourHandler(id)}
        >
          Not Interested &#x1F494;
        </button>
      </div>
    </>
  );
}

export default Card;
