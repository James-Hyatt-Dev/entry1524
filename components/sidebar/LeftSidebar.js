import React from 'react'
import Link from 'next/link';

// file imports
import SidebarOptions from './SIdebarOptions';

function LeftSidebar() {
  return (
    // container
    <section className="sidebar top-0 left-0 pl-10 h-screen w-1/4 text-accent">

      {/* wrapper */}
      <div className="flex flex-col gap-2 page fixed left-10">


        <div className="font-semibold text-xl w-full flex items-center justify-center  underline">Your Friends</div>

          {/* individual listing of friends and their online status if provided. This will populate in deployment through a db access and looping, the below is for display purposes */}
          <SidebarOptions
            name='Remy Smith'
            alt='Remy Smith'
            src={"/friends/Friend1.jpeg"}
            css='text-green-500'
          />
          <SidebarOptions
            name='Stacy Jackson'
            alt='Stacy Jackson'
            src={"/friends/Friend2.jpeg"}
            css='text-red-600'
          />
          <SidebarOptions
            name='Jack A Hyatt'
            alt='Jack A Hyatt'
            src={"/friends/Friend3.jpeg"}
            css='text-red-600'
          />
          <SidebarOptions
            name='Lui Lem'
            alt='Lui Lem'
            src={"/friends/Friend4.jpeg"}
            css='text-green-600'
          />
          <SidebarOptions
            name='Lisa Johnson'
            alt='Lisa Johnson'
            src={"/friends/Friend5.jpeg"}
            css='text-green-600'
          />
          <SidebarOptions
            name='Thomas McDole'
            alt='Thomas McDole'
            src={"/friends/Friend6.jpeg"}
            css='text-green-600'
          />
          <SidebarOptions
            name='Christina Hyatt'
            alt='Christina Hyatt'
            src={"/friends/Friend7.jpeg"}
            css='text-red-600'
          />
          <SidebarOptions
            name='Jennifer Reisinger'
            alt='Jennifer Reisinger'
            src={"/friends/Friend8.jpeg"}
            css='text-green-600'
          />
          <SidebarOptions
            name='Gary Reisinger'
            alt='Gary Reisinger'
            src={"/friends/Friend9.jpeg"}
            css='text-green-600'
          />
          <SidebarOptions
            name='Shawn Aubrey'
            alt='Shawn Aubrey'
            src={"/friends/Friend10.jpeg"}
            css='text-red-600'
          />

          {/* button to expand all friends onto another page to show all friends */}
          <div className="bg-accent max-w-30 w-60 mx-20 py-2 rounded shadow-md flex items-center justify-center text-white font-semibold hover:shadow-none duration-300">
            <Link  
              href='#'
            >
              Show All
            </Link>
          </div>
        </div>
    </section>
  )
}

export default LeftSidebar