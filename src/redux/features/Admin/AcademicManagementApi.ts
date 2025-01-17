import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        console.log("Args: ", args);
        // const params = new URLSearchParams();
        // params.append(args[0].name, args[0].value);
        return {
          url: "/academic-semesters",
          method: "GET",
          //   params: params,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-semesters/create-academic-semester",
          method: "POST",
          body: data,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => {
        console.log("Data in api: ", data);
        return {
          url: "/academic-faculties/create-academic-faculty",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllAcademicFaculty: builder.query({
      query: () => {
        return {
          url: "/academic-faculties",
          method: "GET",
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => {
        console.log("Data: ", data);
        return {
          url: "/academic-departments/create-academic-department",
          method: "POST",
          body: data,
        };
      },
    }),
    getAcademicDepartment: builder.query({
      query: () => {
        return {
          url: "/academic-departments",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddAcademicSemesterMutation,
  useAddAcademicFacultyMutation,
  useGetAllAcademicFacultyQuery,
  useAddAcademicDepartmentMutation,
  useGetAcademicDepartmentQuery,
} = academicManagementApi;
