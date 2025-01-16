import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (data: string) => (
        console.log("hqwehfihwe", data),
        {
          url: "/academic-semesters",
          method: "GET",
        }
      ),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
