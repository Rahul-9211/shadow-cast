import React from "react";
import Video2D from "./components/2d";
import Video180 from "./components/180";
import Video360 from "./components/360";
import Music from "./components/music";
import Volumetric from "./components/volumetric";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const myAssetsTabs = [
  {
    id: 0,
    parentId: 0,
    key: "volumetric-video",
    name: "Volumetric Video",
    children: null,
    component: <Volumetric />,
  },
  {
    id: 1,
    parentId: 1,
    key: "180-video",
    name: "180 Video",
    children: null,
    component: <Video180 />,
  },
  {
    id: 2,
    parentId: 2,
    key: "360-video",
    name: "360 Video",
    children: null,
    component: <Video360 />,
  },
  {
    id: 3,
    parentId: 3,
    key: "2D-video",
    name: "2D Video",
    children: null,
    component: <Video2D />,
  },
  {
    id: 4,
    parentId: 4,
    key: "music",
    name: "Music",
    children: null,
    component: <Music />,
  },
];

const All = () => {
  const navigate = useNavigate();
  const { type, channelId } = useParams();
  const routePaths = [
    "/marketplace/entertainments/channels/volumetric-video",
    "/marketplace/entertainments/channels/180-video",
    "/marketplace/entertainments/channels/360-video",
    "/marketplace/entertainments/channels/2D",
    "/marketplace/entertainments/channels/music",
    "/marketplace/entertainments/channels/channels",
  ];

  const [activeTabs, setActivetab] = useState(() => {
    if (type === 'channels') {
      const tab = myAssetsTabs.find((tab) => tab.key === channelId);
      return tab || myAssetsTabs[0]; // Default to the first tab if activeTab is not found
    } else {
      window.location.href = "http://localhost:3000";
    }
  });

  return (
    <>
      <hr className="border-[0.1px] border-[#5A5A5A80] mx-3" />

      <div className="__myassets_container_main px-[15px] py-[35px] flex flex-col md:flex-row max-[768px]:flex-col max-[768px]:p-0 max-[1280px]:py-[25px]">
        <div className="__assets_category_panel w-[100%] md:w-[20%] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
          <h5 className="text-[grey] font-body mb-[10px] font-bold tracking-[1px] max-[768px]:hidden text-sm">
            Category
          </h5>
          <div className="overflow-hidden">
            <ul
              data-testid="tablist"
              className="flex md:flex-col
              px-[0px]
              [&>li]:px-[12px] 
              [&>li]:py-[10px] 
              [&>li]:font-light 
              [&>li]:font-body
              [&>li]:my-[15px] 
              hover:[&>li]:bg-[#FBBC5E1A]
              hover:[&>li]:rounded-[5px]
              hover:[&>li]:cursor-pointer
              max-[768px]:overflow-x-scroll
              max-[768px]:flex
              max-[768px]:[&>li]:py-[5px]
              max-[768px]:[&>li]:my-[10px]
              max-[768px]:px-0
              "
            >
              {myAssetsTabs?.map((tabs, index) => (
               
                <li
                  role="tab"
                  key={tabs.key}
                  className={`mr-8 md:mr-[0] whitespace-nowrap hover:bg-[#FBBC5E4D] rounded-[5px] ${
                    activeTabs && activeTabs.key == tabs.key
                      ? "!bg-[#FBBC5E4D]"
                      : ""
                  }`}
                  onClick={() => {
                    setActivetab(tabs);
                    navigate(routePaths[index]);
                  }}
                >
                  {tabs.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="__assets_tabs_container_panel w-[100%] md:w-[80%] sm:p-[10px] md:pl-[56px] xl:pl-[96px] max-[768px]:w-auto max-[768px]:h-auto max-[768px]:mt-[18px]">
          {activeTabs && activeTabs.component}
        </div>
      </div>
    </>
  );
};

export default All;