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
  {
    component: ManagerDashboard,
    path: "/managerDashboard",
    icon: <FcDepartment />,
    title: "Dashboard",
    permission: [Roles.manager],
  },
];
