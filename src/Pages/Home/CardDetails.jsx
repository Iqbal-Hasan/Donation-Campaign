import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardDetails = () => {
  const handleAddToDonation = () => {
    const donationArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems) {
      donationArray.push(card);
      localStorage.setItem("donation", JSON.stringify(donationArray));
      swal("Good job!", "You Have Donated Successfully!", "success");
    } else {
      const isExist = donationItems.find((item) => item.id == id);

      if (!isExist) {
        donationArray.push(...donationItems, card);
        localStorage.setItem("donation", JSON.stringify(donationArray));
        swal("Good job!", "You Have Donated Successfully!", "success");
      } else {
        swal("Error!", "You Have Already Donated!", "error");
      }
    }
  };

  const [card, setCard] = useState({});
  const { id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = Array.from(cards).find((card) => card.id == id);
    setCard(findCard);
  }, [cards, id]);

  return (
    <div className="xl:max-w-screen-xl xl:mx-auto my-10 mx-5">
      <div className="relative rounded-md md:rounded-[40px]  overflow-hidden">
        <img
          className="w-full lg:h-[700px] object-cover object-center"
          src={card.image}
          alt=""
        />
        <div className="bg-[#0b0b0b80] py-4 md:py-14 md:px-10 px-3 absolute bottom-0 w-full">
          <button
            onClick={handleAddToDonation}
            style={{ backgroundColor: `${card.text_color}` }}
            className="py-2 rounded-lg text-white text-sm font-bold px-4 md:px-6 md:py-4 md:text-xl"
          >
            Donate ${card.price}
          </button>
        </div>
      </div>
      <h1 className="my-7 text-4xl font-bold">{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
};

export default CardDetails;
