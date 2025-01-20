import Loading from "../../../../components/Loading/Loading";
import { useGetRegisterdSemesterQuery } from "../../../../redux/features/Admin/courseManagementApi";
import { TRegisteredSemester } from "../../../../utils/Type/Type";
import RegisteredSemesterTable from "./RegisteredSemesterTable";

const RegesterdSemester = () => {
  const { data: registeredSemesterData, isLoading } =
    useGetRegisterdSemesterQuery(undefined);
  const registeredSemesters = registeredSemesterData?.data;
  console.log("Registered Semester: ", registeredSemesters);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Regestered Semester</h1>
      <div className="overflow-x-auto w-10/12 mx-auto border border-black rounded-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {registeredSemesters.map(
              (data: TRegisteredSemester, idx: number) => (
                <RegisteredSemesterTable
                  key={idx}
                  registeredSemester={data}
                  idx={idx}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegesterdSemester;
