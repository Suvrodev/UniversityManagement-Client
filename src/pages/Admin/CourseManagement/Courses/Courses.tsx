import Loading from "../../../../components/Loading/Loading";
import { useGetAllCoursesQuery } from "../../../../redux/features/Admin/courseManagementApi";
import { TCourse } from "../../../../utils/Type/Type";
import CourseTable from "./CourseTable";

const Courses = () => {
  const { data: coursesData, isLoading } = useGetAllCoursesQuery(undefined);
  const courses = coursesData?.data;
  console.log(courses);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Courses</h1>
      <div className="overflow-x-auto w-10/12 mx-auto border border-black rounded-md">
        <table className="table table-zebra-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Code</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((data: TCourse, idx: number) => (
              <CourseTable key={idx} course={data} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
