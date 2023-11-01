import React from "react";
import SubscribeImg from "assets/images/myassets/EARTH CITY.png";

const Subscription = () => {
  return (
    <>
      <div className="__subscription_main_container w-[100%] pl-[30px] mt-[20px] mb-[20px] max-[768px]:p-0">
        <div className="__subscribe__main__list__container">
          <div className="__subscribe_list flex pl-[10px]">
            <img
              src={SubscribeImg}
              alt="subscribeIMG"
              className="rounded-[50%] w-[55px] h-[55px] max-[768px]:w-[40px] max-[768px]:h-[40px]"
            />
            <div className="pl-[20px] mt-[4px] max-[768px]:pl-[10px] max-[768px]:mt-[8px] max-[1280px]:mt-[15px]">
              <h5 className="__list_title text-[16px] max-[768px]:text-[12px]">
                Fourth Star Entertainment{" "}
                <span className="text-[12px] pl-[10px] text-[#FBBC5E] hover:underline hover:cursor-pointer max-[768px]:text-[8px] max-[768px]:p-0">
                  Go to channel
                </span>
              </h5>
              <p className="__list__subtitle text-[13px] text-[grey] max-[768px]:text-[7px]">
                Subscription renews on September 24, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] pl-[30px] mt-[30px] h-[2px] max-[768px]:pl-[15px] max-[768px]:mt-[15px]">
        <hr className="border-[0.1px] border-[#5A5A5A80]" />
      </div>
      <div className="__subscription_main_container w-[100%] pl-[30px] mt-[20px] pt-[30px] mb-[20px] max-[768px]:p-0">
        <div className="__subscribe__main__list__container">
          <div className="__subscribe_list flex pl-[10px]">
            <img
              src={SubscribeImg}
              alt="subscribeIMG"
              className="rounded-[50%] w-[55px] h-[55px] max-[768px]:w-[40px] max-[768px]:h-[40px]"
            />
            <div className="pl-[20px] mt-[4px] max-[768px]:pl-[10px] max-[768px]:mt-[8px] max-[1280px]:mt-[15px]">
              <h5 className="__list_title text-[16px] max-[768px]:text-[12px]">
              Nureal Entertainment{" "}
                <span className="text-[12px] pl-[10px] text-[#FBBC5E] hover:underline hover:cursor-pointer max-[768px]:text-[8px] max-[768px]:p-0">
                  Go to channel
                </span>
              </h5>
              <p className="__list__subtitle text-[13px] text-[grey] max-[768px]:text-[7px]">
                Subscription renews on September 24, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
