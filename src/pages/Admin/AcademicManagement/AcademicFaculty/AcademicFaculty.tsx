import { useGetAllAcademicFacultyQuery } from "../../../../redux/features/Admin/AcademicManagementApi";

const AcademicFaculty = () => {
  const { data, isLoading } = useGetAllAcademicFacultyQuery(undefined);
  const allFaculty = data?.data;
  console.log("Academic Faculty: ", allFaculty);
  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div className="h-[100vh]">
      <h1 className="text-xl font-bold">Academic Faculty</h1>

      <div className="overflow-x-auto w-1/2 mx-auto border border-black rounded-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Faculty Name Name</th>
            </tr>
          </thead>
          <tbody>
            {allFaculty.map((data: { name: string }, idx: number) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{data?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicFaculty;
