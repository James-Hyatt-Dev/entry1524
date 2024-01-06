import React from 'react'
import Link from 'next/link';



function NavOptions({title, href, Icon}) {
  return (
    <div className="flex group flex-col text-entry items-center justify-center pt-4 text-accent">

        {/* icon and link */}
        <Link
            href={href}
        >
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