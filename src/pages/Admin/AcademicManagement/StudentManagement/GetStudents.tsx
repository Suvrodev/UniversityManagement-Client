import { Link } from "react-router";
import Loading from "../../../../components/Loading/Loading";
import { useGetAllStudentsQuery } from "../../../../redux/features/Admin/userManagementApi";

const GetStudents = () => {
  const { data, isLoading } = useGetAllStudentsQuery(undefined);
  const students = data?.data;
  console.log("Get All Students: ", students);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="h-[100vh]">
      <h1 className="text-xl font-bold">Get All Students</h1>
      <div className="overflow-x-auto">
        <table className="table border border-black">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Enrollment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {students.map((data: any, idx: number) => (
              <tr key={idx}>
                <td>{data?._id}</td>
                <td>{data?.fullName}</td>
                <td>{data?.year}</td>
                <td>{data?.academicDepartment?.name}</td>
                <td className="flex gap-2">
                  <Link to={`/admin/student-detail/${data?._id}`}>
                    <button className="btn btn-sm btn-primary text-white">
                      Detail
                    </button>
                  </Link>
                  <button className="btn btn-sm btn-success text-white">
                    Update
                  </button>
                  <button className="btn btn-sm btn-error text-white">
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetStudents;
