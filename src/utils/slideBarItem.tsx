import { MenuProps } from "antd";
import { NavLink } from "react-router";

// export const sidebarItems: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "3rta",
//         label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
//       },
//       {
//         key: "3rthb",
//         label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
//       },
//       {
//         key: "3web",
//         label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
//       },
//     ],
//   },
// ];

export const getSideBarItems = (role: string) => {
  console.log(role);
  const sidebarItems: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
    },
    {
      key: "User Management",
      label: `${
        role == "admin"
          ? "User Management"
          : `${role == "student" ? "Offered Course" : "Faculty"}`
      } `,
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
          label: (
            <NavLink to={"/admin/academic-faculty"}>Academic Faculty</NavLink>
          ),
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
            <NavLink to={"/admin/academic-semester"}>
              Academic Department
            </NavLink>
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
        {
          key: "3web",
          label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
        },
      ],
    },
  ];
  return sidebarItems;
};
