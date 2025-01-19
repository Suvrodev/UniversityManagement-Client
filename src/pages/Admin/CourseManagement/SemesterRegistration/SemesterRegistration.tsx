import { ChangeEvent, FormEvent, useState } from "react";
import Loading from "../../../../components/Loading/Loading";
import { useGetAllSemestersQuery } from "../../../../redux/features/Admin/AcademicManagementApi";
import { TSemester } from "../../../../utils/Type/Type";
import { semesterStatuss } from "../../../../utils/Arrays/Arrays";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { toast } from "sonner";
import { sonarId } from "../../../../utils/sonarId";
import { useAddRegisteredSemesterMutation } from "../../../../redux/features/Admin/courseManagementApi";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const SemesterRegistration = () => {
  const [addSemesterRegister] = useAddRegisteredSemesterMutation();

  const { data: allSemesterData, isLoading: semesterLoading } =
    useGetAllSemestersQuery(undefined);
  const allSemester = allSemesterData?.data;

  //Academic Semester
  const [academicSemester, setAcademicSemester] = useState("");
  const handleAcademicSemester = (event: ChangeEvent<HTMLSelectElement>) => {
    const semester = event.target.value;
    setAcademicSemester(semester);
  };

  //Semester Status
  const [semesterStatus, setSemesterStatus] = useState("");
  const handleSemesterStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setSemesterStatus(event.target.value);
  };

  const handleRegistrationSemester = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;

    const minCredit = Form.minCredit.value;
    const maxCredit = Form.maxCredit.value;

    if (!academicSemester) {
      toast.error("Have to select Academic Semester", { id: sonarId });
      return;
    }
    if (!semesterStatus) {
      toast.error("Have to select Semester status", { id: sonarId });
      return;
    }
    const formData = {
      academicSemester,
      status: semesterStatus,
      startDate,
      endDate,
      minCredit: parseFloat(minCredit),
      maxCredit: parseFloat(maxCredit),
    };
    // console.log("Form Data: ", formData);
    toast.loading("Wait for resistered semester", { id: sonarId });
    const res = await addSemesterRegister(formData).unwrap();
    console.log(res);
    if (res?.success) {
      toast.success("Semester Registered Successfully", { id: sonarId });
    }
  };

  //Start Date
  const [startDate, onChangeStartDate] = useState<Value>(new Date());
  const [endDate, onChangeEndDate] = useState<Value>(new Date());

  if (semesterLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Semester Registration</h1>

      <form action="" onSubmit={handleRegistrationSemester}>
        <div className="my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p>Academic Semester</p>
              <select
                name=""
                onChange={handleAcademicSemester}
                className="inputBoxForCreateStudent"
                value={academicSemester}
              >
                <option value="" disabled>
                  Click One
                </option>
                {allSemester?.map((data: TSemester, idx: number) => (
                  <option key={idx} value={data?._id}>
                    {data?.name} {data?.year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p>Semester status</p>
              <select
                name=""
                onChange={handleSemesterStatus}
                className="inputBoxForCreateStudent"
                value={semesterStatus}
              >
                <option value="" disabled>
                  Select One
                </option>
                {semesterStatuss?.map((data: string, idx: number) => (
                  <option key={idx} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p>Start Date</p>
              <DatePicker
                onChange={onChangeStartDate}
                value={startDate}
                className="dateStyle"
              />
            </div>
            <div className="">
              <p>End Date</p>
              <DatePicker
                onChange={onChangeEndDate}
                value={endDate}
                className="dateStyle"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p>Min Credit</p>
              <input
                type="number"
                name="minCredit"
                defaultValue="3"
                required
                className="inputBoxForCreateStudent "
              />
            </div>

            <div className="">
              <p>Max Credit</p>
              <input
                type="number"
                name="maxCredit"
                defaultValue="18"
                required
                className="inputBoxForCreateStudent "
              />
            </div>
          </div>

          <div className="my-4">
            <button className="w-full btn btn-primary text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SemesterRegistration;
