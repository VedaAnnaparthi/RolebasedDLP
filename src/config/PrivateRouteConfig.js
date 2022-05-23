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

import AdminDashboard from "../pages/SuperAdmin/pages/Dashboard/AdminDashboard";
import CreatorDashboard from "../pages/Creator/Pages/CreatorDashboard";
//Learnerdashboard 
import LearnerDashBoard  from "../pages/Learner/pages/Dashboard/LearnerDashboard";
import LearnerCourses from "../pages/Learner/pages/Courses/LearnerCourses";




// client imports start..
import ClientDashBoard from "../pages/client/components/DashBoard/ClientDashBoard";
import ClientLearner from "../pages/client/pages/LearnerManagement/ClientLearner";
import ClientCourse from "../pages/client/pages/CourseManagement/ClientCourse";
import ClientPayment from "../pages/client/pages/PaymentInfo/ClientPayment";
import ClientProfile from "../pages/client/pages/ClientProfile/ClientProfile";
import ClientReports from "../pages/client/pages/ClientReports/ClientReports";

// client imports ends..



import ManagerDashboard from "../pages/BranchManager/Pages/ManagerDashboard";
import Courses from "../pages/BranchManager/Pages/ManagerCourses";
import { SiBookstack } from "react-icons/si";

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
      component: ClientDashBoard,
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

    {
      component: LearnerDashBoard,
      path : "/learnerDashboard",
      icon : <FcManager/>,
      title: "Dashboard",
      permission: [Roles.learner],
    },

    {
      component: LearnerCourses,
      path : "/learnerCourses",
      icon : <FcManager/>,
      title: "Courses",
      permission: [Roles.learner]
    }


  ];
 
