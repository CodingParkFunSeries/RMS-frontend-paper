import BatchView from "views/BatchView.jsx";
import StudentPage from "views/StudentView.jsx";
import SchoolView from "views/SchoolView";
import StudentsView from "views/StudentsView.jsx"
import SemesterView from "views/SemesterView";


var routes = [
  {
    path: "/schools",
    name: "School",
    icon: "nc-icon nc-tile-56",
    component: SchoolView,
    layout: "/school"
  },
  {
    path: "/semester",
    name: "Semester",
    icon: "nc-icon nc-tile-56",
    component: SemesterView,
    layout: "/school"
  },
  {
    path: "/batch",
    name: "Batch",
    icon: "nc-icon nc-tile-56",
    component: BatchView,
    layout: "/school"
  },
  {
    path: "/students",
    name: "Students ",
    icon: "nc-icon nc-single-02",
    component: StudentsView,
    layout: "/school"
  },
  {
    path: "/student",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: StudentPage,
    layout: "/school"
  }
];
export default routes;
