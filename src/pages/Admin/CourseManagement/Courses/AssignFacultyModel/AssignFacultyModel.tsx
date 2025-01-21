import { FormEvent, useState } from "react";
import { Button, Modal } from "antd";
import {
  useAddAssignFacultyMutation,
  useGetAllFacultyQuery,
} from "../../../../../redux/features/Admin/courseManagementApi";
///Multiple Selection
import { Select } from "antd";
import { toast } from "sonner";
import { sonarId } from "../../../../../utils/sonarId";

interface IProps {
  courseId: string;
}

const AssignFacultyModel = ({ courseId }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  ///Work start from here
  const [addAssignFaculty] = useAddAssignFacultyMutation();
  const { data: usData } = useGetAllFacultyQuery(undefined);
  console.log("Us: ", usData?.data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ourData = usData?.data.map((data: any) => {
    const ok = { value: data?._id, label: data?.fullName };
    return ok;
  });
  // console.log("Our Data: ", ourData);

  const [selectedTeacher, setSelectedTeacher] = useState<string[]>([]);
  const handleChange = (value: string[]) => {
    // console.log(`Selected: ${value}`);
    setSelectedTeacher(value);
  };
  // console.log("Selected teacher: ", selectedTeacher);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { faculties: selectedTeacher };
    console.log("FormData: ", formData);

    const res = await addAssignFaculty({ courseId, formData }).unwrap();

    console.log("Res: ", res);
    if (res?.success) {
      toast.success("Course Assign Successfully", { id: sonarId });
    }

    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Assign Faculty
      </Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <p>Faculty</p>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Select or enter tags"
            onChange={handleChange}
            options={ourData}
          />
          <button className="btn btn-primary text-white">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default AssignFacultyModel;
