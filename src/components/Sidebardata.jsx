import React from 'react'
import { HomeIcon } from 'lucide-react'
import { Plus } from 'lucide-react'
import { BarChart3 } from 'lucide-react'
import { Brain } from 'lucide-react'
export const Sidebardata = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/"
    },
    {
        title:"Add Tasks",
        icon:<Plus/>,
        link:"/todo"
    },
    {
        title:"Statistics",
        icon:<BarChart3/>,
        link:"/stats"
    },
    {
        title:"AI",
        icon:<Brain/>,
        link:"/AI"
    },
    {
        title:"Example ",
        // icon:<HomeIcon/>,
        // link:"/home"
    },
   
    
]
