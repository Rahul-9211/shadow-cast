import { MyAssetsHome } from 'components/assets/myassets'
import { MyAvatarHome } from 'components/assets/myavatar'
import { useState } from 'react'
import { AssetsParentTab } from 'constant'

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
    activeTab: "my-assets"
  })

  return <div className='__my_assets_main container mx-auto px-[130px] py-[25px] max-[768px]:px-[15px] max-[1280px]:px-0'>
        <div className='__myassets_parentTabs_main 
                      border-gray-50 
                      px-[15px] 
                      py-[15px] 
                      [&>ul]:pb-[15px]
                      max-[768px]:p-0
                      '>
            <ul className={`flex gap-8 [&>li]:font-medium [&>li]:cursor-pointer`}>
              {
                AssetsParentTab?.map((tabs, ind) => {
                  return <li key={tabs.key} className={`${parentActivetab.activeTab === tabs.key ? 'text-[#fff] text-[18px] max-[768px]:text-[12px] transition-all' : 'text-[gray]' }`} onClick={() => setParentActivetab({activeTab: tabs.key})}>
                      {tabs.name}
                  </li>
                })
              }
            </ul>
            <hr className='h-px bg-gray-500 border-1'/>
        </div>  
          
        {/* My Assets Container */}
        {
          parentActivetab.activeTab === "my-assets" && <MyAssetsHome/>
        }
        
        {/* My Avatar Container */}
        {
          parentActivetab.activeTab === "my-avatar" && <MyAvatarHome/>
        }    
  </div>
}

export default MyAssets