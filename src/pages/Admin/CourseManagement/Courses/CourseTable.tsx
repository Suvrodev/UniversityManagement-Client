import { TCourse } from "../../../../utils/Type/Type";
import AssignFacultyModel from "./AssignFacultyModel/AssignFacultyModel";

interface IProps {
  course: TCourse;
  idx: number;
}

const CourseTable = ({ course, idx }: IProps) => {
  //   console.log("Checkkkk: ", course);
  return (
    <tr key={idx}>
      <th>{idx + 1}</th>
      <td>{course?.title}</td>
      <td>{course?.code}</td>

      <td>
        <AssignFacultyModel courseId={course._id} />
      </td>
    </tr>
  );
};

export default CourseTable;
