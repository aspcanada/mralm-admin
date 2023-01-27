import Link from "next/link";
import React from "react";
import { ChevronsLeft } from "react-feather";
import { Media } from "reactstrap";
import SidebarMenu from "./SidebarMenu";
import { useUser } from '@auth0/nextjs-auth0'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Sidebar = ({ toggle, setToggle }) => {
  const { user, error, isLoading } = useUser()

  return (
    <div className={`page-sidebar ${!toggle ? 'close_icon' : ''}`}>
      <div className="logo-wrap">
        <Link href='/'>
          <img src="/assets/images/logo/4.png" className="img-fluid for-light" alt='' />
          <img src="/assets/images/logo/9.png" className="img-fluid for-dark" alt='' />
        </Link>
        <div className="back-btn d-lg-none d-inline-block">
          <ChevronsLeft onClick={() => { setToggle(!toggle) }} />
        </div>
      </div>
      <div className="main-sidebar">
        <div className="user-profile">
          <Media className="media">
            <div className="change-pic">
              <img src={user.picture} className="img-fluid" alt='' />
            </div>
            <Media body className="media-body">
              <Link href='/manage-users/profile'>
                <h6>{user.nickname}</h6>
              </Link>
              <span className="font-roboto">{user.email}</span>
            </Media>
          </Media>
        </div>
        <div id="mainsidebar">
          <SidebarMenu />
        </div >
      </div >
    </div >
  );
};

export default Sidebar;
// export default withPageAuthRequired(Sidebar);
