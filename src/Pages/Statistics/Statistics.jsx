// import React, { Component } from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Statistics = () => {
  const [donation, setdonation] = useState(0);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setdonation(donationItems.length);
    } else {
      setdonation(0);
    }
  }, []);
  return (
    <div className="mt-10 md:mt-28 flex justify-center items-center h-[400px]">
      <Chart
        type="pie"
        width="500"
        height="500"
        series={[12, donation]}
        options={{
          labels: [`Total Donation (12)`, `Your Donation (${donation})`],
          colors: ["#4169e1", "#e14141"],
          legend: {
            show: true,
            position: "bottom",
            fontSize: "20px",
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 300,
                },
              },
            },
          ],
        }}
      ></Chart>
    </div>
  );
};

export default Statistics;
