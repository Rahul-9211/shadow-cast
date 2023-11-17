import { MyAssetsHome } from "components/assets/myassets";
import { MyAvatarHome } from "components/assets/myavatar";
import { useState } from "react";
import { AssetsParentTab } from "constant";
import ShadowFrame from "components/shadow-frame";


/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module User-Assets-Component
 *@developer Aditya P
 */

const MyAssets = () => {
  const [parentActivetab, setParentActivetab] = useState({
    id: 0,
    activeTab: "my-assets",
  });

  return (
    // <div data-testid="my-assets-main" className="__my_assets_main container mx-auto px-[80px] py-[25px] max-[768px]:px-[15px] max-[1280px]:px-0 bg-[#1D1D1D]">
    <div data-testid="my-assets-main" className="container app-container mx-auto px-2 md:px-3 xl:px-6 2xl:px-10 py-[25px] relative z-10">
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[350px] md:w-[250px] h-[350px] md:h-[400px] rounded-[250px] md:rounded-[400px] left-[-10%] max-[768px]:left-[-50%] top-[50%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[250px] md:w-[250px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[10%] max-[768px]:right-[50%] top-[60%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <div
        data-testid="parent-tabs"
        className="__myassets_parentTabs_main 
                      border-gray-50 
                      px-[15px] 
                      py-[15px] 
                      [&>ul]:pb-[15px]
                      max-[768px]:p-0
                      "
      >
        <ul data-testid="parenttab" className={`flex gap-6 [&>li]:font-medium [&>li]:font-body [&>li]:cursor-pointer`}>
          {AssetsParentTab?.map((tabs, ind) => {
            return (
              <li
                role="parent-list-item"
                key={tabs.key}
                className={`${parentActivetab.activeTab === tabs.key
                  ? "text-[#fff] text-[18px] max-[768px]:text-[12px] transition-all"
                  : "text-[gray] text-[18px] max-[768px]:text-[12px] transition-all"
                  }`}
                onClick={() => setParentActivetab({ activeTab: tabs.key })}
              >
                {tabs.name}
              </li>
            );
          })}
        </ul>
        <hr className="border-[0.1px] border-[#5A5A5A80]" />
      </div>

      {/* My Assets Container */}
      {parentActivetab.activeTab === "my-assets" && <MyAssetsHome />}

      {/* My Avatar Container */}
      {parentActivetab.activeTab === "my-avatar" && <MyAvatarHome />}
    </div>
  );
};

export default MyAssets;
