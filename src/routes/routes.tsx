import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester/AcademicSemester";
import CreateAcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester/CreateAcademicSemester";
import CreateStudent from "../pages/Admin/AcademicManagement/StudentManagement/CreateStudent";
import CreateAcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment/CreateAcademicDepartment";
import AcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment/AcademicDepartment";
import CreateAcademicFaculty from "../pages/Admin/AcademicManagement/AcademicFaculty/CreateAcademicFaculty";
import AcademicFaculty from "../pages/Admin/AcademicManagement/AcademicFaculty/AcademicFaculty";
import Loading from "../components/Loading/Loading";
import GetStudents from "../pages/Admin/AcademicManagement/StudentManagement/GetStudents";
import StudentDetail from "../pages/Admin/AcademicManagement/StudentManagement/StudentDetail/StudentDetail";
// import AdminLayout from "../components/layout/Admin/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        path: "get-student",
        element: <GetStudents />,
      },
      {
        path: "student-detail/:_id",
        element: <StudentDetail />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
  {
    path: "loading",
    element: <Loading />,
  },
]);
