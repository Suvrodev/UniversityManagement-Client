import { useParams } from "react-router";

const StudentDetail = () => {
  const { _id } = useParams();
  return (
    <div className="h-[100vh]">
      <h1 className="text-xl font-bold">Student Detail:{_id}</h1>
    </div>
  );
};

export default StudentDetail;
