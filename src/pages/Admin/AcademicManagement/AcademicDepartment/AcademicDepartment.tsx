import Loading from "../../../../components/Loading/Loading";
import { useGetAcademicDepartmentQuery } from "../../../../redux/features/Admin/AcademicManagementApi";
import { setDepatment } from "../../../../redux/features/Admin/departmentSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import { TDepartments } from "../../../../utils/Type/Type";

const AcademicDepartment = () => {
  const { data, isLoading } = useGetAcademicDepartmentQuery(undefined);
  const dispatch = useAppDispatch();
  const allDepartment = data?.data;
  console.log("All department: ", allDepartment);
  if (allDepartment) {
    dispatch(setDepatment(allDepartment));
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="h-[100vh]">
      <h1 className="text-xl font-bold">Academic department</h1>
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
            {allDepartment.map((data: TDepartments, idx: number) => (
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

export default AcademicDepartment;
