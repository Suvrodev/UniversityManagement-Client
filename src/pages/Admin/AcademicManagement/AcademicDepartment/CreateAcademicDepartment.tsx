import { ChangeEvent, FormEvent, useState } from "react";
import {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from "../../../../redux/features/Admin/AcademicManagementApi";
import Loading from "../../../../components/Loading/Loading";
import { TAcademicFaculty } from "../../../../utils/Type/Type";
import { toast } from "sonner";
import { sonarId } from "../../../../utils/sonarId";

const CreateAcademicDepartment = () => {
  const [addDepartment] = useAddAcademicDepartmentMutation();

  const { data, isLoading } = useGetAllAcademicFacultyQuery(undefined);
  const allFaculty = data?.data;
  // console.log("Academic Faculty: ", allFaculty);

  const [faculty, setFaculty] = useState("");
  const handleFaculty = (event: ChangeEvent<HTMLSelectElement>) => {
    const data = event.target.value;
    setFaculty(data);
  };

  const handleAcademicDepartment = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;

    if (!faculty) {
      toast.error("Have to Select Faculty", { id: sonarId });
    }
    const name = Form.departmentName.value;
    const formData = { name, academicFaculty: faculty };
    console.log("Form Data: ", formData);
    try {
      toast.loading("Inserting Academic department", { id: sonarId });
      const res = await addDepartment(formData).unwrap();
      console.log("Res: ", res);
      if (res?.success) {
        toast.success(res?.message, { id: sonarId });
      }
    } catch {
      toast.error("Something went wrong", { id: sonarId });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-xl font-bold">Create Academic Faculty</h1>
      <form action="" onSubmit={handleAcademicDepartment}>
        <div className="w-full md:w-1/2 mx-auto">
          <p className="my-4 text-xlg font-bold">Academic Department Name</p>
          <input
            type="text"
            name="departmentName"
            id=""
            className=" w-full bg-transparent px-4 outline-none rounded-lg py-2 border-2 rouned-md"
            required
          />
          <p className="my-4 text-xlg font-bold">Academic Faculty</p>
          <select
            name=""
            id=""
            value={faculty}
            onChange={handleFaculty}
            className="w-full bg-transparent px-4 outline-none rounded-lg py-2 border-2 rouned-md"
          >
            <option value="" disabled>
              Select One
            </option>
            {allFaculty.map((data: TAcademicFaculty, idx: number) => (
              <option key={idx} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
          <div className="my-4">
            <button className="btn btn-primary text-white">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAcademicDepartment;
