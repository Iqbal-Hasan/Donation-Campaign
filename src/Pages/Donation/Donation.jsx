import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noData, setNoData] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoData("No Donation Found");
    }
  }, []);
  return (
    <>
      {noData ? (
        <div className="flex justify-center items-center h-[500px]">
          <h1 className="text-3xl text-slate-600 font-bold">{noData}</h1>
        </div>
      ) : (
        <div className="xl:max-w-screen-xl xl:mx-auto my-10 mx-5">
          <div className="grid lg:grid-cols-2 gap-5">
            {showMore
              ? donation.map((donationItem) => (
                  <DonationCard
                    key={donationItem.id}
                    donationItem={donationItem}
                  ></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((donationItem) => (
                    <DonationCard
                      key={donationItem.id}
                      donationItem={donationItem}
                    ></DonationCard>
                  ))}
          </div>

          {donation.length > 4 && (
            <p
              onClick={() => setShowMore(!showMore)}
              className="py-2 w-fit mx-auto text-white cursor-pointer bg-red-500 mt-8 font-bold px-4 rounded-lg"
            >
              {showMore ? "Show Less" : "Show More"}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Donation;
