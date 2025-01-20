import moment from "moment";
import {
  TRegisteredSemester,
  TRegisteredSemesterStatus,
} from "../../../../utils/Type/Type";
import { ChangeEvent, useState } from "react";
import { semesterStatuss } from "../../../../utils/Arrays/Arrays";
import { useUpdateRegisterSemesterMutation } from "../../../../redux/features/Admin/courseManagementApi";
import { toast } from "sonner";
import { sonarId } from "../../../../utils/sonarId";

interface IProps {
  registeredSemester: TRegisteredSemester;
  idx: number;
}

const RegisteredSemesterTable = ({ registeredSemester, idx }: IProps) => {
  //   console.log("Registered Table: ", registeredSemester);

  const [update] = useUpdateRegisterSemesterMutation();
  const {
    _id,
    academicSemester,
    status,
    startDate,
    endDate,
    // maxCredit,
    // minCredit,
    // createdAt,
    // updatedAt,
  } = registeredSemester;

  const startDateMoment = moment(new Date(startDate)).format("MMM Do YY");
  const endDateMoment = moment(new Date(endDate)).format("MMM Do YY");

  const [newStatus, setNewStatus] = useState(status);

  const handleNewStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    const data = event.target.value;
    setNewStatus(data as TRegisteredSemesterStatus);
    console.log("Fucking Data: ", newStatus);
    toast.loading("Loading", { id: sonarId });
    const updateData = { status: data };
    const res = await update({ _id, updateData }).unwrap();
    console.log("Res: ", res);
    if (res.success) {
      toast.success("Registered Semester Updated", { id: sonarId });
    }
  };

  return (
    <tr key={idx}>
      <th>{idx + 1}</th>
      <td>
        {academicSemester?.name} {academicSemester?.year}
      </td>
      <td>
        {status === "ENDED" ? (
          <span className="badge badge-primary">{status}</span>
        ) : status === "ONGOING" ? (
          <span className="badge badge-secondary">{status}</span>
        ) : (
          <span className="badge badge-accent">{status}</span>
        )}
      </td>
      <td>{startDateMoment}</td>
      <td>{endDateMoment}</td>
      <td>
        <select
          name=""
          id=""
          className="rounded-md border-none outline-none"
          value={newStatus}
          onChange={handleNewStatus}
        >
          {semesterStatuss.map((data, idxx: number) => (
            <option key={idxx} value={data}>
              {data}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default RegisteredSemesterTable;
