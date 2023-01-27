import Link from 'next/link'
import React from 'react'
import { FileText, LogOut, User } from 'react-feather'
import { useUser } from '@auth0/nextjs-auth0'

const UserProfile = () => {
    const { user, isLoading } = useUser()

    return (
        <li className="profile-avatar onhover-dropdown">
            <div>
                <img src={user.picture} className="img-fluid" alt='' />
            </div>
            <ul className="profile-dropdown onhover-show-div">
                <li>
                    <Link href='/manage-users/profile'>
                        <span>Account </span>
                        <User />
                    </Link>
                </li>
                <li>
                    <Link href='/myproperties/propertylist'>
                        <span>Listing</span>
                        <FileText />
                    </Link>
                </li>
                {/* <li>
                    <Link href='/api/auth/login'>
                        <span>Login</span>
                        <LogIn />
                    </Link>
                </li> */}
                <li>
                    <a href='/api/auth/logout'>
                        <span>Logout</span>
                        <LogOut />
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default UserProfile