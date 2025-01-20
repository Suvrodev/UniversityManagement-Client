import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRegisteredSemester: builder.mutation({
      query: (data) => {
        console.log("Data in Registered Semester: ", data);
        return {
          url: "semester-registrations/create-semester-registration",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["registeredSemester"],
    }),
    getRegisterdSemester: builder.query({
      query: () => {
        return {
          url: "/semester-registrations",
          method: "GET",
        };
      },
      providesTags: ["registeredSemester"],
    }),
    updateRegisterSemester: builder.mutation({
      query: ({ _id, updateData }) => {
        console.log("Update id: ", _id);
        console.log("Update Data: ", updateData);
        return {
          url: `/semester-registrations/${_id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["registeredSemester"],
    }),
    getAllCourses: builder.query({
      query: () => {
        return {
          url: "/courses",
          method: "GET",
        };
      },
      providesTags: ["course"],
    }),
    addNewCourse: builder.mutation({
      query: (data) => {
        return {
          url: "/courses/create-course",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useAddRegisteredSemesterMutation,
  useGetRegisterdSemesterQuery,
  useUpdateRegisterSemesterMutation,
  useGetAllCoursesQuery,
  useAddNewCourseMutation,
} = courseManagementApi;
