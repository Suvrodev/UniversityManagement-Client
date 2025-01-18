import { useAppDispatch } from "../../../../redux/hooks";
import { addCGPA } from "../../../../redux/features/MyForm/FormSlice";
import { ChangeEvent } from "react";

const Cgpa = () => {
  const dispatch = useAppDispatch();

  const handleCG = (event: ChangeEvent<HTMLInputElement>) => {
    const cg = event.target.value;
    dispatch(addCGPA(cg));
  };
  return (
    <div>
      <h1>Cgpa</h1>
      <input
        type="number"
        name=""
        className="bg-transparent px-4 py-2 border-2 rounded-md border-purple-600"
        placeholder="Enter Your CGPA"
        id=""
        onChange={handleCG}
      />
    </div>
  );
};

export default Cgpa;
