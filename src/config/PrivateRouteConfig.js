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
import ContentCreatorManagement from "../pages/SuperAdmin/pages/ContentCreatorManagement/ContentCreatorManagement"
import CourseManagement from "../pages/SuperAdmin/pages/CourseManagement/CourseManagement"
import LearningPlan from "../pages/SuperAdmin/pages/Learning/LearningPlan"
import Reports from "../pages/SuperAdmin/pages/Reports/Reports"

import CreatorDashboard from "../pages/Creator/Pages/CreatorDashboard";
import CreatorStudio from "../pages/Creator/Pages/CreatorStudio";
import Feedback from "../pages/Creator/Pages/Feedback";
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
import BranchManagement from "../pages/client/pages/BranchManagement/BranchManagement"
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
      component: ContentCreatorManagement,
      path: "/adminCreatorManagement",
      icon: <FcManager />,
      title: "Creator Management",
      permission: [Roles.admin],
    },

    {
      component: CourseManagement,
      path: "/adminCourseManagement",
      icon: <FcManager />,
      title: "Course Management",
      permission: [Roles.admin],
    },


    {
      component: LearningPlan,
      path: "/adminLearning",
      icon: <FcManager />,
      title: "Learning Plans",
      permission: [Roles.admin],
    },

    {
      component: Reports,
      path: "/adminReports",
      icon: <FcManager />,
      title: "Reports",
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
      component: CreatorStudio,
      path: "/creatorStudio",
      icon: <FcCalendar />,
      title: "Creator Studio",
      permission: [Roles.creator],
    },

    {
      component: Feedback,
      path: "/creatorFeedback",
      icon: <FcCalendar />,
      title: "Feedback",
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
  component: ClientLearner,
  path: "/clientLearnerManagement",
  icon: <FcReading />,
  title: "Learner Management",
  permission: [Roles.client],  
  },
  {
  component: ClientCourse,
  path: "/clientCourseManagement",
  icon: <FcReading />,
  title: "Course Management",
  permission: [Roles.client],
  },
  {
  component: ClientPayment,
  path: "/clientPaymentInfo",
  icon: <FcReading />,
  title: "Payment Info",
  permission: [Roles.client], 
  },
  {
  component: ClientProfile,
  path: "/clientProfile",
  icon: <FcReading />,
  title: "Client Profile",
  permission: [Roles.client],
  },
  {
  component: ClientReports,
  path: "/clientReports",
  icon: <FcReading />,
  title: "Client Reports",
  permission: [Roles.client], 
  },

  {
    component: BranchManagement,
    path: "/clientBranchManagement",
    icon: <FcReading />,
    title: "Branch Management",
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
 
