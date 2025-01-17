import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../../redux/features/Admin/AcademicManagementApi";
import { sonarId } from "../../../../utils/sonarId";

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const academicSemester = [
    {
      name: "Autumn",
      code: "01",
    },
    {
      name: "Summer",
      code: "02",
    },
    {
      name: "Fall",
      code: "03",
    },
  ];
  const years = ["2024", "2025", "2026", "2027", "2028"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [semester, setSemester] = useState<{
    name: string;
    code: string;
  } | null>(null);

  const handleSemester = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSemesterInJSON = event.target.value;
    const selectedSemester = JSON.parse(selectedSemesterInJSON);
    setSemester(selectedSemester);
  };

  const [year, setectYear] = useState<string>("");
  const handleYear = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    setectYear(selectedYear as string);
  };

  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");

  const handleStartMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setStartMonth(event.target.value);
  };

  const handleEndMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setEndMonth(event.target.value);
  };

  const handleSaveSemester = async () => {
    if (!semester) {
      toast.error("Semester Name not selected");
      return;
    }
    if (!year) {
      toast.error("Year not selected");
      return;
    }
    if (!startMonth) {
      toast.error("Start Month not selected");
      return;
    }
    if (!endMonth) {
      toast.error("End month not selected");
      return;
    }
    const semesterData = {
      name: semester?.name,
      year,
      code: semester?.code,
      startMonth,
      endMonth,
    };
    try {
      toast.loading("Loading to insert Data", { id: sonarId });
      const res = await addAcademicSemester(semesterData).unwrap();
      console.log("Res: ", res);
      if (res?.success === true) {
        toast.success(res?.message, { id: sonarId });
      }
    } catch {
      // toast.error("Something Went Wrong from catch");
    }
  };
  return (
    <div>
      <h1 className="text-xl my-2 font-bold">Create Academic Semester</h1>

      <div className="border-2 rounded-md w-full md:w-5/12 lg:w-4/12 mx-auto p-5 border-green-400">
        <div>
          <h1 className="my-4 text-lg ">Semester Name</h1>
          <select
            id="id"
            value={semester ? JSON.stringify(semester) : ""}
            onChange={handleSemester}
            className="bg-transparent border-4 rounded-md outline-none"
          >
            <option value="" disabled>
              Choose Semester
            </option>
            {academicSemester.map((data) => (
              <option key={data.code} value={JSON.stringify(data)}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className="my-4 text-lg">Year</h1>
          <select
            id="id"
            value={year}
            onChange={handleYear}
            className="bg-transparent border-4 rounded-md outline-none"
          >
            <option value="" disabled>
              Choose Year
            </option>
            {years.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <div>
            <h1 className="my-4">Start Month</h1>
            <select
              id="id"
              value={startMonth}
              onChange={handleStartMonth}
              className="bg-transparent border-4 rounded-md outline-none"
            >
              <option value="" disabled>
                Choose Start Month
              </option>
              {months.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1 className="my-4 ">End Month</h1>
            <select
              id="id"
              value={endMonth}
              onChange={handleEndMonth}
              className="bg-transparent border-4 rounded-md outline-none"
            >
              <option value="" disabled>
                Choose End Month
              </option>
              {months.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-4 flex justify-center items-center">
          <button
            className="btn btn-primary text-white w-[150px]"
            onClick={handleSaveSemester}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAcademicSemester;
