import React from 'react'

// mui.com icon imports
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import NavOptions from './NavOptions';

function NavItems() {
  return (
    // container
    <div className="">

      {/* wrapper */}
      <div className="flex items-center gap-10">
        
        {/* importing of icon styling from reusable component */}
        <NavOptions 
          title='My Feed'
          Icon={<DynamicFeedIcon />}
          href={'/feed'}
        />
        <NavOptions 
          title='Create Entry'
          Icon={<EditIcon />}
          href={'/create-entry'}
        />
        <NavOptions 
          title='My Entries'
          Icon={<FolderIcon />}
          href={'/home'}
        />
        <NavOptions 
          title='My Chats'
          Icon={<QuestionAnswerIcon />}
          href={'/home'}
        />
        <NavOptions 
          title='My Groups'
          Icon={<GroupsIcon />}
          href={'/home'}
        />
        <NavOptions 
          title='My Messages'
          Icon={<EmailIcon />}
          href={'/home'}
        />
        <NavOptions 
          title='My Profile'
          Icon={<AccountCircleIcon />}
          href={'/home'}
        />
        <NavOptions 
          title='My Settings'
          Icon={<SettingsIcon />}
          href={'/home'}
        />
        <NavOptions 
          title='Get Support'
          Icon={<SupportIcon/>}
          href={'/home'}
        />

      </div>
    </div>
  )
}

export default NavItems