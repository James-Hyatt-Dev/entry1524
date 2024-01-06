import Image from 'next/image'
import React from 'react'

// import files
import EntryLogo from '/public/logos/EntryLogo.webp'

function Navigation() {
  return (
    // main container
    <div className="shadow-md w-screen h-28">

        {/* wrapper */}
        <div className="flex items-center w-full h-full justify-center">
            
            {/* logo section */}
            <section className="w-96 flex justify-center border-b-4 border-accent">
                <Image
                    src={EntryLogo}
                    width={100}
                    alt='entry logo displayed in main color pastel green'
                />
            </section>
        </div>
    </div>
  )
}

export default Navigation