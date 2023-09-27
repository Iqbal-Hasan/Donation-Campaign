/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id,title, image, category, category_bg, text_color, card_bg } = data;
  return (
    <>
      <Link to={`/card/${id}`}>
        <div
          style={{
            backgroundColor: `${card_bg}`,
          }}
          className="rounded-lg overflow-hidden bg-[#f8714726]"
        >
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="p-4">
            <p
              style={{
                backgroundColor: `${category_bg}`,
                color: `${text_color}`,
              }}
              className={`text-base w-fit py-1 px-3 font-medium rounded-md mb-4`}
            >
              {category}
            </p>
            <h2
              style={{
                color: `${text_color}`,
              }}
              className="text-xl font-semibold"
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
