import React from "react";
import menu from "../assets/menu.jpg";

function Menu() {
  return (
    <>
      <div className="flex   justify-center">
        <div class="flex  flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:w-full mx-8 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-900">
          <div class="flex w-1/2 flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Prepared with love.
            </h5>
            <p class="mb-3 font-normal text-slate-700 dark:text-slate-400">
              We offer a variety of sweets and salty pastry perfect for all
              accasions and casual cravings , click on the view button to view
              our menu items and prices.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cdn.discordapp.com/attachments/901150871927279636/957965360781463592/nathan-dumlao-5-tl8DLvYA4-unsplash.jpg"
            >
              <button class="bg-blue-500 hover:bg-blue-700 w-1/4 mt-4 text-white font-bold py-2 px-4 rounded-full">
                View
              </button>
            </a>
          </div>
          <img
            class="object-cover my-4 mx-2 w-1/2  rounded-lg "
            src={menu}
            alt="menu"
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
