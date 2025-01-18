import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { addName } from "../../../../redux/features/MyForm/FormSlice";

const Name = () => {
  const dispatch = useAppDispatch();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addName(event.target.value));
  };
  return (
    <div>
      <h1>Name</h1>
      <input
        type="text"
        name=""
        className="bg-transparent px-4 py-2 border-2 rounded-md border-purple-600"
        placeholder="Enter Your Name"
        id=""
        onChange={handleNameChange}
      />
    </div>
  );
};

export default Name;
