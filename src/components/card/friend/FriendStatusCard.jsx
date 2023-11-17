import React from 'react'
import FriendAvatar from 'assets/images/friends_avatar.png'

const FriendStatusCard = ({statusKey}) => {
  return <div className='__container_card mt-[15px]'>
    <div className='__card__container_view flex justify-between px-[30px] max-[768px]:px-[10px] h-[70px] max-[768px]:h-[90px] max-[1200px]:h-[100px] rounded-[8px] bg-gradient-to-r from-[#FBBC5E0D] to-[#F3A1510D]'>
        <div className='__card__user_container flex justify-center items-center'>
            <img src={FriendAvatar} alt='friends_avatar' className='w-[57px] h-[57px] max-[768px]:w-[40px] max-[768px]:h-[40px]' />
            <div className='__user_data flex flex-col px-[15px] max-[768px]:px-[10px]'>
                <div>
                    <span className='text-[16px] max-[768px]:text-[12px]'>@xavier29</span>
                    <span className='text-[14px] text-[#FFFFFF80] max-[768px]:text-[11px]'> Xavier Samuel</span>
                </div>
                <div>
                    <span className='text-[12px] text-[#FFFFFF99] max-[768px]:text-[9px]'>Wants to invite you as friends. <span className='text-[#fff]'> 9 mins ago</span></span>
                </div>
            </div>
        </div>
        <div className='__card__button__group 
                        flex 
                        gap-[15px] 
                        justify-center 
                        items-center 
                        [&>button]:border 
                        [&>button]:px-[16px] 
                        [&>button]:rounded-[8px] 
                        [&>button]:py-[4px] 
                        [&>button]:border-[#7A7A7A] 
                        [&>button]:text-[13px] 
                        [&>button]:font-medium
                        max-[768px]:[&>button]:text-[9px]
                        max-[768px]:[&>button]:w-[80px]
                        max-[768px]:gap-[7px]
                        max-[768px]:[&>button]:px-[15px]
                        max-[768px]:[&>button]:py-[1px]
                        max-[768px]:flex-col
                        '>
            
            {
                statusKey === 'PENDING' ? <button className='hover:bg-[#fff] hover:text-[#000] transition-all'>Reject</button> :  <button className='hover:bg-[#fff] hover:text-[#000] transition-all'>Cancel</button>
            }
           
            {
                statusKey === 'PENDING' ? <button className='text-[#F3A151] hover:bg-gradient-to-r hover:from-[#FBBC5E] hover:to-[#F3A151] transition-all hover:text-[#000]'>Accept</button> : <button className='hover:cursor-not-allowed text-[#7A7A7A] border-[#7A7A7A] opacity-70'>Requested</button>
            }
        </div>
    </div>
  </div>
}

export default FriendStatusCard