import { useAppSelector } from "../../../../redux/hooks";
import Cgpa from "./Cgpa";
import Department from "./Department";
import Name from "./Name";

const FormPage = () => {
  const { name, department, cgpa } = useAppSelector((state) => state?.suvrodeb);
  const handleMyForm = () => {
    console.log("My Form");
    console.log("Name: ", name, "\nDepartment: ", department, "\nCGPA: ", cgpa);
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Form Page</h1>
      <Name />
      <Department />
      <Cgpa />
      <button
        className="btn btn-primary text-white my-4"
        onClick={handleMyForm}
      >
        Submit
      </button>
    </div>
  );
};

export default FormPage;
