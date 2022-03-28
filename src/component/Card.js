import React from "react";
import location from "../assets/location.jpg";
import hours from "../assets/hours.jpg";
import delivery from "../assets/delivery.jpg";

function Card() {
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <div className="flex justify-center">
        <div className=" mt-6 mb-8  grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Location */}
          <div class="max-w-sm  rounded-lg overflow-hidden shadow-lg">
            <img
              class="w-full h-[420px]"
              src={location}
              alt="Sunset in the mountains"
            />
            <div class="rounded-b-lg px-6 py-4 bg-sky-600 hover:bg-sky-700">
              <div className="cardTitle flex justify-center">
                <div class=" text-slate-100 text-3xl font-bold mt-1 mb-4">
                  Location
                </div>
              </div>
              <p class="text-slate-100 text-base mb-2 font-medium">
                Located in Beirut,Lebanon near the local bank facing beirut
                restaurant at tariq street.
                <br />
                Our phone number: +961 555 5551
              </p>
            </div>
          </div>
          {/* Opening Hours */}
          <div class="max-w-sm  rounded-lg overflow-hidden shadow-lg">
            <img
              class="w-full h-[420px]"
              src={hours}
              alt="Sunset in the mountains"
            />
            <div class="rounded-b-lg px-6 py-4 bg-sky-600 hover:bg-sky-700">
              <div className="cardTitle flex justify-center">
                <div class=" text-slate-100 text-3xl font-bold mt-1 mb-4">
                  Opening Hours
                </div>
              </div>
              <p class="text-slate-100 text-base mb-2 font-medium">
                We are open from 6 am till 3 pm from Monday till Friday.
                <br />
                We are open from 6 am till 1 pm on Saturday.
                <br />
                We are open from 6 am till 12 pm on Sunday.
              </p>
            </div>
          </div>
          {/* Delivery */}
          <div class="max-w-sm  rounded-lg overflow-hidden shadow-lg">
            <img
              class="w-full h-[420px]"
              src={delivery}
              alt="Sunset in the mountains"
            />
            <div class="rounded-b-lg px-6 py-4 bg-sky-600 hover:bg-sky-700">
              <div className="cardTitle flex justify-center">
                <div class=" text-slate-100 text-3xl font-bold mt-1 mb-4">
                  Delivery
                </div>
              </div>
              <p class="text-slate-100 text-base mb-2 font-medium">
                We deliver around the beirut area free of charge and we charge a
                fee when asked to deliver outside of that area
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
