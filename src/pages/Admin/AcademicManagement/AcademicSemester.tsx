import { useGetAllSemestersQuery } from "../../../redux/features/AcademicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery("ABC");
  console.log("Data: ", data);
  return (
    <div>
      <h1>Academic Semester</h1>
    </div>
  );
};

export default AcademicSemester;
