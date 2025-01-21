import { MenuProps } from "antd";
import { useState } from "react";
import { NavLink } from "react-router";

const academicManagement = {
  key: "Academic Management",
  label: "Academic Management",
  children: [
    {
      key: "CreateA.Semester",
      label: (
        <NavLink to={"/admin/create-academic-semester"}>
          Create A.Semester
        </NavLink>
      ),
    },

    {
      key: "3webe",
      label: (
        <NavLink to={"/admin/academic-semester"}>Academic Semester</NavLink>
      ),
    },
    {
      key: "CreateA.Faculty",
      label: (
        <NavLink to={"/admin/create-academic-faculty"}>
          Create A.Faculty
        </NavLink>
      ),
    },

    {
      key: "3websse",
      label: <NavLink to={"/admin/academic-faculty"}>Academic Faculty</NavLink>,
    },
    {
      key: "CreateA.Department",
      label: (
        <NavLink to={"/admin/create-academic-department"}>
          Create A.Department
        </NavLink>
      ),
    },

    {
      key: "3webes",
      label: (
        <NavLink to={"/admin/academic-department"}>Academic Department</NavLink>
      ),
    },
    {
      key: "3rta",
      label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
    },
    {
      key: "3rthb",
      label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
    },
  ],
};

const userManagement = {
  key: "User Management",
  label: "User Management",
  children: [
    {
      key: "3web",
      label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
    },
    {
      key: "getStudents",
      label: <NavLink to={"/admin/get-student"}>Get Student</NavLink>,
    },
  ],
};
const courseManagement = {
  key: "CourseManagement",
  label: "Course Management",
  children: [
    {
      key: "SemesterRegistration",
      label: (
        <NavLink to={"/admin/semester-registration"}>
          Semester Registration
        </NavLink>
      ),
    },
    {
      key: "regesteredSemester",
      label: (
        <NavLink to={"/admin/registered-semester"}>Regestered Semester</NavLink>
      ),
    },
    {
      key: "createCourse",
      label: <NavLink to={"/admin/create-course"}>Create Course</NavLink>,
    },
    {
      key: "courses",
      label: <NavLink to={"/admin/courses"}>Courses</NavLink>,
    },
    {
      key: "offerCourse",
      label: <NavLink to={"/admin/offer-course"}>Offer Course</NavLink>,
    },
    {
      key: "offerdCourses",
      label: <NavLink to={"/admin/offered-courses"}>Offered Courses</NavLink>,
    },
  ],
};

export const useGetSideBarItems = () => {
  const [role, setRole] = useState("admin");
  // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
  let restLebel: any[] = [];
  if (role == "admin") {
    restLebel.push(userManagement);
    restLebel.push(academicManagement);
    restLebel.push(courseManagement);
  } else if (role == "student") {
    restLebel.push(academicManagement);
  } else {
    setRole("");
  }

  console.log("Ok");
  const sidebarItems: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
    },

    ...restLebel.map((data) => ({
      key: data.key,
      label: data.label,
      children: data.children, // Include nested children if they exist
    })),
  ];
  return sidebarItems;
};
