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
// client imports start
import ClientDashboard from "../pages/Client/components/DashBoard/ClientDashBoard";
import Learner from "../pages/Client/pages/LearnerManagement/Learner";
import ClientCourse from "../pages/Client/pages/CourseManagement/ClientCourse";
import ClientPayment from "../pages/Client/pages/PaymentInfo/ClientPayment";
import ClientProfile from "../pages/Client/pages/ClientProfile/ClientProfile";
import ClientReports from "../pages/Client/pages/ClientReports/ClientReports";


import ManagerDashboard from "../pages/BranchManager/Pages/ManagerDashboard";

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
    component: ClientDashboard,
    path: "/clientDashboard",
    icon: <FcReading />,
    title: "Dashboard",
    permission: [Roles.client],

  },
  {
    component: Learner,
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
