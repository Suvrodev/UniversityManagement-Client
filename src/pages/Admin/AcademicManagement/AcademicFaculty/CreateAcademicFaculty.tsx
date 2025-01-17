import { FormEvent } from "react";
import { useAddAcademicFacultyMutation } from "../../../../redux/features/Admin/AcademicManagementApi";
import { toast } from "sonner";
import { sonarId } from "../../../../utils/sonarId";

const CreateAcademicFaculty = () => {
  const [addFaculty] = useAddAcademicFacultyMutation();
  const handleAcademicFaculty = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const name = Form.facultyName.value;
    const formData = { name };
    console.log(formData);
    try {
      toast.loading("Inserting", { id: sonarId });
      const res = await addFaculty(formData).unwrap();
      console.log("res: ", res);
      if (res?.success) {
        toast.success("Faculty Insert Successfully", { id: sonarId });
      }
    } catch {
      console.log("Problem to Insert Data ");
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-xl font-bold">Create Academic Faculty</h1>
      <form action="" onSubmit={handleAcademicFaculty}>
        <div className="w-full md:w-1/2 mx-auto">
          <p className="my-4 text-xlg font-bold">Academic Faculty Name</p>
          <input
            type="text"
            name="facultyName"
            id=""
            className=" w-full bg-transparent px-4 outline-none rounded-lg py-2 border-2 rouned-md"
            required
          />
          <div className="my-4">
            <button className="btn btn-primary text-white">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAcademicFaculty;
