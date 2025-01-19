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
import FormPage from "../components/layout/Suvrodeb/Formpage/FormPage";
import OfferedCourses from "../pages/Admin/CourseManagement/OfferedCourses/OfferedCourses";
import SemesterRegistration from "../pages/Admin/CourseManagement/SemesterRegistration/SemesterRegistration";
import RegesterdSemester from "../pages/Admin/CourseManagement/RegesterdSemester/RegesterdSemester";
import CreateCourse from "../pages/Admin/CourseManagement/CreateCourse/CreateCourse";
import Courses from "../pages/Admin/CourseManagement/Courses/Courses";
import OffereCourse from "../pages/Admin/CourseManagement/OffereCourse/OffereCourse";
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
      {
        path: "form",
        element: <FormPage />,
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
      {
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        path: "registered-semester",
        element: <RegesterdSemester />,
      },
      {
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "offer-course",
        element: <OffereCourse />,
      },
      {
        path: "offered-courses",
        element: <OfferedCourses />,
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
