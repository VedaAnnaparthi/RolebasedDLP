//Default Component Imports
import {
    FcBusinessman,
    FcSurvey,
    FcDataSheet,
    FcDepartment,
    FcTimeline,
    FcOvertime,
    FcManager,
    FcReading,
    FcSportsMode,
    FcCollaboration,
    FcConferenceCall,
    FcCalendar,
    FcLeave,
    FcMultipleInputs,
    FcNeutralTrading,
    FcAdvance,
  } from "react-icons/fc";
  
  //Data Imports
  import Roles from "./Roles";
  
  //Custom Component Imports
  
  
  
  import AdminDashboard from "../pages/SuperAdmin/Pages/Dashboard";
  import CreatorDashboard from "../pages/Creator/Pages/CreatorDashboard"
  import LearnerDashboard from "../pages/Learner/Pages/LearnerDashboard";
import ClientDashboard from "../pages/Client/Pages/ClientDashbord";
import ManagerDashboard from "../pages/BranchManager/Pages/ManagerDashboard";
import Courses from "../pages/BranchManager/Pages/ManagerCourses";

  export default [
   
    {
      component: AdminDashboard,
      path: "/adminDashboard",
      icon: <FcManager />,
      title: "Dashboard",
      permission: [Roles.admin],
    },
    {
      component: CreatorDashboard,
      path: "/creatorDashboard",
      icon: <FcCalendar />,
      title: "Dashboard",
      permission: [Roles.creator],
    },
    {
      component: LearnerDashboard,
      path: "/learnerDashboard",
      icon: <FcReading />,
      title: "Dashboard",
      permission: [Roles.learner],
    },
    {
      component: ClientDashboard,
      path: "/clientDashboard",
      icon: <FcNeutralTrading />,
      title: "Dashboard",
      permission: [Roles.client],
    },   
    {
      component: ManagerDashboard,
      path: "/managerDashboard",
      icon: <FcDepartment />,
      title: "Dashboard",
      permission: [Roles.manager],
      
    },
    {
      component: Courses,
      path: "/courses",
      icon: <FcDepartment />,
      title: "Courses",
      permission: [Roles.manager],
    },
  ];
  