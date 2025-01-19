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
    }),
  }),
});

export const { useAddRegisteredSemesterMutation } = courseManagementApi;
