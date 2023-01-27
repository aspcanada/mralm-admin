import { Airplay, BarChart, CreditCard, Grid, Layout, Lock, MapPin, UserPlus, Users } from "react-feather";

export const SidebarMenuItem = [
    {
        title: 'Dashboard',
        icon: <Airplay />,
        type: 'link',
        path: "/dashboard"
    },
    {
        title: 'Deals',
        icon: <Grid />,
        type: 'sub',
        children: [
            {
                path: "/myproperties/add-property",
                title: 'Add Propery',
                type: 'link'
            },
            {
                path: "/myproperties/edit-property",
                title: 'Edit Propery',
                type: 'link'
            },
            {
                path: "/myproperties/propertylist",
                title: 'Property List',
                type: 'link'
            }
        ]
    },
    {
        title: 'Users',
        icon: <Users />,
        // type: 'sub',
        type: 'link',
        path: "/users",
        // children: [
            // {
            //     path: "/manage-users/profile",
            //     title: 'Profile',
            //     type: 'link'
            // },
            // {
            //     path: "/manage-users/add-user",
            //     title: 'Add User',
            //     type: 'link'
            // },
            // {
            //     path: "/manage-users/adduser-wizard",
            //     title: 'Add User Wizard',
            //     badge: true,
            //     type: 'link'
            // },
            // {
            //     path: "/manage-users/edit-user",
            //     title: 'Edit User',
            //     type: 'link'
            // },
            // {
            //     path: "/manage-users/allusers",
            //     title: 'Lenders',
            //     type: 'link'
            // },
            // {
            //     path: "/manage-users/allusers",
            //     title: 'Borrowers',
            //     type: 'link'
            // }
        // ]
    },
    // {
    //     title: 'Agents',
    //     icon: <UserPlus />,
    //     type: 'sub',
    //     children: [
    //         {
    //             path: "/agents/profile",
    //             title: 'Profile',
    //             type: 'link'
    //         },
    //         {
    //             path: "/agents/add-agent",
    //             title: 'Add Agent',
    //             type: 'link'
    //         },
    //         {
    //             path: "/agents/add-agent-wizard",
    //             title: 'Add Agent Wizard',
    //             badge: true,
    //             type: 'link'
    //         },
    //         {
    //             path: "/agents/edit-agent",
    //             title: 'Edit Agent',
    //             type: 'link'
    //         },
    //         {
    //             path: "/agents/all-agents",
    //             title: 'All Agents',
    //             type: 'link'
    //         },
    //         {
    //             path: "/agents/invoice",
    //             title: 'Invoice',
    //             type: 'link'
    //         }
    //     ]
    // },
    // {
    //     title: 'Map',
    //     icon: <MapPin />,
    //     type: 'link',
    //     path: "/map"
    // },
    // {
    //     title: 'Reports',
    //     icon: <BarChart />,
    //     type: 'link',
    //     path: "/reports"
    // },
    // {
    //     title: 'Payments',
    //     icon: <CreditCard />,
    //     type: 'link',
    //     path: "/payments"
    // },
    // {
    //     title: 'Authentication',
    //     icon: <Lock />,
    //     type: 'sub',
    //     children: [
    //         {
    //             path: "/authentication/login",
    //             title: 'LogIn',
    //             type: 'link'
    //         },
    //         {
    //             path: "/authentication/signup",
    //             title: 'Sign Up',
    //             type: 'link'
    //         },
    //         {
    //             path: "/authentication/404",
    //             title: '404',
    //             type: 'link'
    //         }
    //     ]
    // }
]