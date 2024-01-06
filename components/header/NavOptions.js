import Link from 'next/link'
import React from 'react'


function NavOptions({ title, href, Icon }) {
  return (
    // container
    // reusable component for icons in the navigation of the header
    <div className="">

        {/* icon */}
        <Link href={href} >
            {Icon}
        </Link>

        {/* title */}
        <div className="text-xs font-semibold invisible group-hover:visible">
            {title}
        </div>

    </div>
  )
}

export default NavOptions