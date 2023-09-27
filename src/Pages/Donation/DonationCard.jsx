/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({ donationItem }) => {
  return (
    <div
      style={{
        backgroundColor: `${donationItem.card_bg}`,
      }}
      className="flex flex-col sm:flex-row gap-5 rounded-lg overflow-hidden"
    >
      <div>
        <img
          className="rounded-lg w-full lg:h-full lg:object-cover lg:object-center lg:w-[230px] xl:w-full"
          src={donationItem.image}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-2 pl-3 pb-3 sm:pl-0 sm:pb-0 sm:pr-0 lg:py-3 xl:py-0">
        <p
          style={{
            backgroundColor: `${donationItem.category_bg}`,
            color: `${donationItem.text_color}`,
          }}
          className={`text-base w-fit py-1 px-3 font-medium rounded-md`}
        >
          {donationItem.category}
        </p>
        <h2 className="text-xl font-semibold">{donationItem.title}</h2>
        <p
          style={{
            color: `${donationItem.text_color}`,
          }}
          className="font-bold"
        >
          ${donationItem.price.toFixed(2)}
        </p>
        <Link
          style={{
            backgroundColor: `${donationItem.text_color}`,
          }}
          className="w-fit py-2 text-white font-bold px-4 rounded-lg"
          to={`/card/${donationItem.id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
