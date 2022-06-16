import React from "react";

import { BsThreeDots } from "react-icons/bs";

export default function ActivityLog() {
  const data = [
    {
      day: "Sun",
      date: "16/6 9:50AM",
      name: "Centralized Server hosted",
      status: "Done",
    },
    {
      day: "Mon",
      date: "9/5 12:08PM",
      name: "Troubeshooting container",
      status: "Due",
    },
    {
      day: "Wed",
      date: "12/2 6:15PM",
      name: "Collect metadata",
      status: "Done",
    },
    {
      day: "Sat",
      date: "7/9 2:10AM",
      name: "Update Logs",
      status: "Due",
    },
  ];
  return (
    <div className="activity">
      <div className="activity__info">
        <h4>Wallets</h4>
        <BsThreeDots />
      </div>
      <div className="activity__container">
        {data.map((transaction) => {
          return (
            <div className="transaction">
              <div className="timestamp">
                <h5>{transaction.day}</h5>
                <h6>{transaction.date}</h6>
              </div>
              <div className="dot"></div>
              <div className="details">
                <h5>{transaction.name}</h5>
                <h5>{transaction.status}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
