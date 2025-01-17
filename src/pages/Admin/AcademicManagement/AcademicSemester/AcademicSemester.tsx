import Loading from "../../../../components/Loading/Loading";
import { useGetAllSemestersQuery } from "../../../../redux/features/Admin/AcademicManagementApi";
import { TSemester } from "../../../../utils/Type/Type";

const AcademicSemester = () => {
  const { data, isLoading } = useGetAllSemestersQuery(undefined);

  const semesterData = data?.data;
  console.log("Semester Data: ", semesterData);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Academic Semester</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Year</th>
              <th>Start Month</th>
              <th>End Month</th>
            </tr>
          </thead>
          <tbody>
            {semesterData.map((data: TSemester, idx: number) => (
              <tr key={idx}>
                <td>{data?.name}</td>
                <td>{data?.code}</td>
                <td>{data?.year}</td>
                <td>{data?.startMonth}</td>
                <td>{data?.endMonth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicSemester;
