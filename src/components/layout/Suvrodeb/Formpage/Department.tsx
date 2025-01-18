import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { addDepartment } from "../../../../redux/features/MyForm/FormSlice";

const Department = () => {
  const dispatch = useAppDispatch();
  const handleDepartmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addDepartment(event.target.value));
  };

  return (
    <div>
      <h1>Department</h1>
      <input
        type="text"
        name=""
        className="bg-transparent px-4 py-2 border-2 rounded-md border-purple-600"
        placeholder="Enter Your Department"
        id=""
        onChange={handleDepartmentChange}
      />
    </div>
  );
};

export default Department;
