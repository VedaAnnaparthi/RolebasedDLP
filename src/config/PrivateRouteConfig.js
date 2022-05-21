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
import CreatorDashboard from "../pages/Creator/Pages/CreatorDashboard";
import LearnerDashBoard from "../pages/Learner/pages/Dashboard/LearnerDashboard";
import ClientDashboard from "../pages/Client/Pages/ClientDashbord";



import AdminDashboard from "../pages/SuperAdmin/Pages/Dashboard";
import CreatorDashboard from "../pages/Creator/Pages/CreatorDashboard"
import LearnerDashboard from "../pages/Learner/Pages/LearnerDashboard";
// client imports start..
import ClientDashBoard from "../pages/client/components/DashBoard/ClientDashBoard";
import ClientLearner from "../pages/client/pages/LearnerManagement/ClientLearner";
import ClientCourse from "../pages/client/pages/CourseManagement/ClientCourse";
import ClientPayment from "../pages/client/pages/PaymentInfo/ClientPayment";
import ClientProfile from "../pages/client/pages/ClientProfile/ClientProfile";
import ClientReports from "../pages/client/pages/ClientReports/ClientReports";

// client imports ends..



import ManagerDashboard from "../pages/BranchManager/Pages/ManagerDashboard";
import { SiBookstack } from "react-icons/si";
import LearnerCourses from "../pages/Learner/pages/Courses/LearnerCourses";
import { MdSpaceDashboard } from "react-icons/md";
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
    component: LearnerDashBoard,
    path: "/learnerDashboard",
    icon: <MdSpaceDashboard/>,
    title: "Dashboard",
    permission: [Roles.learner],
  },

  {
    component:LearnerCourses,
    path: "/learnerCourses",
    title: "Courses",
    icon: <SiBookstack />,
    permission: [Roles.learner],
  },

  {
    component: ClientDashboard,
    path: "/clientDashboard",
    icon: <FcNeutralTrading />,
    title: "Dashboard",
    permission: [Roles.client],
  },
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

  // Client Routing Starts
  {
    component: ClientDashBoard,
    path: "/clientDashboard",
    icon: <FcReading />,
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
  // Client Routes Ends

  // Manager Routes Starts

  {
    component: ManagerDashboard,
    path: "/managerDashboard",
    icon: <FcDepartment />,
    title: "Dashboard",
    permission: [Roles.manager],
  },

  
];
