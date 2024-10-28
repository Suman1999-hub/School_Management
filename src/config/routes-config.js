import MyProfile from "../pages/protected/MyProfile";
import Notice from "../pages/protected/Notice";
import Payment from "../pages/protected/Payment";
import Teachers from "../pages/protected/Teachers";
import ViewAllSchool from "../pages/protected/ViewAllSchool";
import AllStudents from "../pages/protected/AllStudents";
import TeacherSchedule from "../pages/protected/TeacherSchedule";
import StudentSchedule from "../pages/protected/StudentSchedule";
import Attendance from "../pages/protected/Attendance";
import Salary from "../pages/protected/Salary";

const SUPER_ADMIN_ROUTES = [
  { text: "School", route: "/school", element: <ViewAllSchool /> },
  { text: "Admin", route: "/admin" },
  { text: "Settings", route: "/settings" },
  { text: "Profile", route: "/profile", element: <MyProfile /> },
];

const ADMIN_ROUTES = [
  { text: "Techer", route: "/teacher", element: <Teachers /> },
  { text: "Schedule", route: "/schedule" },
  { text: "Notice", route: "/notice", element: <Notice /> },
  { text: "Approval", route: "/approval" },
  { text: "Attendance", route: "/attendance", element: <Attendance /> },
  { text: "Report", route: "/report" },
  { text: "Student", route: "/student", element: <AllStudents /> },
  { text: "Settings", route: "/settings" },
  { text: "Profile", route: "/profile", element: <MyProfile /> },
];

const TEACHER_ROUTES = [
  { text: "Time Log", route: "/timelog" },
  { text: "Schedule", route: "/schedule", element: <TeacherSchedule /> },
  { text: "Notice", route: "/notice", element: <Notice /> },
  { text: "Apply Leave", route: "/leave" },
  { text: "Attendance", route: "/attendance", element: <Attendance /> },
  { text: "Report", route: "/report" },
  { text: "Student", route: "/student", element: <AllStudents /> },
  { text: "Salary", route: "/salary", element: <Salary /> },
  { text: "Settings", route: "/settings" },
  { text: "Profile", route: "/profile", element: <MyProfile /> },
];

const STUDENT_ROUTES = [
  { text: "Attendance", route: "/attendance" },
  { text: "Schedule", route: "/schedule", element: <StudentSchedule /> },
  { text: "Notice", route: "/notice", element: <Notice /> },
  { text: "Payment", route: "/payment", element: <Payment /> },
  { text: "Report", route: "/report" },
  { text: "Settings", route: "/settings" },
  { text: "Profile", route: "/profile", element: <MyProfile /> },
];

export const ROUTES = {
  superAdmin: SUPER_ADMIN_ROUTES,
  admin: ADMIN_ROUTES,
  student: STUDENT_ROUTES,
  teacher: TEACHER_ROUTES,
};
