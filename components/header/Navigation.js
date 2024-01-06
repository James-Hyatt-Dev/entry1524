import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'

// import files
import EntryLogo from '/public/logos/EntryLogo.webp'

function Navigation() {
  return (
    // main container
    <div className="shadow-md w-screen pt-2 h-28 fixed top-0 bg-white">

        {/* wrapper */}
        <div className="flex flex-col items-center w-full h-full justify-center">
            
            {/* logo section */}
            <section className="w-96 flex justify-center border-b-4 border-accent">
                <Image
                    src={EntryLogo}
                    width={100}
                    alt='entry logo displayed in main color pastel green'
                />
            </section>

            {/* display the import of the icons */}
            <NavItems />

        </div>

    </div>
  )
}

export default Navigation