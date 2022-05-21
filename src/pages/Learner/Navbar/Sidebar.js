
import React from "react";
import { MdSpaceDashboard } from 'react-icons/md'
import {GoSignOut} from 'react-icons/go'
import {SiBookstack} from 'react-icons/si'
import { NavLink } from "react-router-dom";
// import Accordion from 'react-bootstrap/Accordion'


const Sidebar = ({ children }) => {
  
  const menuItem = [
    {
      path: "/learnerDashboard",
      name: "DashBoard",
      icon:<MdSpaceDashboard/>
    },

    {
      path: "/learnerCourses",
      name: "Courses",
      icon:<SiBookstack/>
    },
    
    // {
    //   path: "/learnerOfferCourse",
    //   name: "",
     
    // },
    {
      path: "/",
      name: "Sign Out",
     icon:<GoSignOut/>
    },
  ];

  return (
    <div className="container-fluid" style={{ marginLeft: "-15px",backgroundColor:"#faff999"  }}>
      <div style={{ width:  "350px" ,backgroundColor:"#08165d"}}  className="sidebar">
        <div className="top_section" >
          <div
            style={{ marginLeft: "200px" }}
            className="bars"
          >
          </div>
        </div>

        {menuItem.map((item, index) => (
        
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: "block"  }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
