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
        type: 'link',
        path: "/users",
    },
]