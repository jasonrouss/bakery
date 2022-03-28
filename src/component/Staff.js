import React from "react";
import chef from "../assets/chef.jpg";
import waiter from "../assets/waiter.jpg";
import manager from "../assets/manager.jpg";
import owner from "../assets/owner.jpg";

function Staff() {
  return (
    <>
      <div className="flex justify-center">
        <div className="title text-4xl text-sky-900 my-8">
          Meet Our Lovely Staff
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" mt-6 mb-8 mx-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Chef */}
          <div class="max-w-sm  rounded overflow-hidden ">
            <img class="w-full" src={chef} alt="Sunset in the mountains" />
            <div class="rounded-b-lg px-6 py-4 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-900">
              <div class=" text-slate-100 font-bold text-xl mb-2">John Doe</div>
              <p class="text-slate-100 text-base">
                {/* Chef description */}
                Ambitious and creative , always checking the latest recipes and
                baking daily fresh items with a delicious smell to satisfy
                everybody's hunger.
              </p>
            </div>
          </div>
          {/* Waiter*/}
          <div class=" max-w-sm rounded overflow-hidden ">
            <img class="w-full" src={waiter} alt="Sunset in the mountains" />
            <div class="rounded-b-lg px-6 py-4 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-900">
              <div class=" font-bold text-slate-100 text-xl mb-2">
                James Doe
              </div>
              <p class="text-slate-100 text-base">
                {/* Waiter description */}
                Helpful and friendly , always around to help you and recommend
                the best meals , also loves to serves our hot beverages from
                coffee to hot chocolate.
              </p>
            </div>
          </div>
          {/* Manager */}
          <div class=" max-w-sm rounded overflow-hidden ">
            <img class="w-full" src={manager} alt="Sunset in the mountains" />
            <div class="rounded-b-lg px-6 py-4 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-900">
              <div class="text-slate-100 font-bold text-xl mb-2">Jane Doe</div>
              <p class="text-slate-100 text-base">
                Understanding and smart, handling our stores operation while
                ensuring customer happiness. Always cheering up the staff that
                boosts the teams morale for the best preformance.
              </p>
            </div>
          </div>
          {/* Owner */}
          <div class=" max-w-sm rounded overflow-hidden  ">
            <img class="w-full" src={owner} alt="Sunset in the mountains" />
            <div class="rounded-b-lg px-6 py-4 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-900">
              <div class="text-slate-100 font-bold text-xl mb-2">James Doe</div>
              <p class="text-slate-100  text-base">
                CEO of our beirut branch a very successful leader that empathize
                with the staff , understand their needs and provide appropriate
                solutions to any problem that may be encountered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;
