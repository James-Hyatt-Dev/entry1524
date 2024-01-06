import React from 'react'

// mui.com imports
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// mui.com icon imports
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function SidebarOptions({ name, alt, src, css }) {
    return (
    // container
    <div className="w-full flex items-center gap-2 font-semibold tracking-wider">

        <Stack  direction="column" spacing={2}>

            <div className="index-0 relative border-2 border-accent rounded-full ">
            <Avatar
                alt={`image of friend ${alt}`}
                src={src}
                sx={{ width: 56, height: 56 }}
            />
            {/* online indicator */}
            <div className={`absolute top-0 right-0 ${css} rounded-full bg-white`}>
                <FiberManualRecordIcon />
            </div>
            </div>

        </Stack>

      <div className="flex-grow">{name}</div>

    </div>
  )
}

export default SidebarOptions