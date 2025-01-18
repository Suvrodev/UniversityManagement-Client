import { ChangeEvent, FormEvent, useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import "./CreateStudent.css";
import { bloodGroups, genders } from "../../../../utils/Arrays/Arrays";
import { toast } from "sonner";
import { sonarId } from "../../../../utils/sonarId";
import {
  useGetAcademicDepartmentQuery,
  useGetAllSemestersQuery,
} from "../../../../redux/features/Admin/AcademicManagementApi";
import { TSemester } from "../../../../utils/Type/Type";
import Loading from "../../../../components/Loading/Loading";
import { useAddStudentMutation } from "../../../../redux/features/Admin/userManagementApi";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CreateStudent = () => {
  const [add] = useAddStudentMutation();

  ///Admission Semester
  const { data: allSemesterData, isLoading: semesterLoading } =
    useGetAllSemestersQuery(undefined);
  const allSemester = allSemesterData?.data;

  const [admissionSemester, setAdmissionSemester] = useState("");

  const handleAdmissionSemester = (event: ChangeEvent<HTMLSelectElement>) => {
    const semester = event.target.value;
    setAdmissionSemester(semester);
    console.log("Select Semester: ", semester);
  };

  //Academic Department
  const { data, isLoading: departmentLoading } =
    useGetAcademicDepartmentQuery(undefined);
  const allDepartments = data?.data;
  // console.log("All Department: ", allDepartments);

  const [admissionDepartment, setAdmissionDepartment] = useState("");

  const handleAdmissionDepartment = (event: ChangeEvent<HTMLSelectElement>) => {
    const department = event.target.value;
    setAdmissionDepartment(department);
    console.log("Select Department: ", department);
  };

  ///Gender
  const [gender, setGender] = useState("male");
  const handleGender = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  //Date of Birth
  const [dob, onChange] = useState<Value>(new Date());

  //Blood Group
  const [bloodGroup, setBloodGroup] = useState("B+");
  const handleBloodGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setBloodGroup(event.target.value);
  };

  const hanldeCreateStudent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;

    if (!gender) {
      toast.error("Gender Must Be Needed", { id: sonarId });
      return;
    }
    if (!bloodGroup) {
      toast.error("Blood Group Must be Needed", { id: sonarId });
      return;
    }
    if (!admissionSemester) {
      toast.error("Admission Semester Must be needed", { id: sonarId });
      return;
    }
    if (!admissionDepartment) {
      toast.error("Admission Department Must be needed", { id: sonarId });
      return;
    }

    const formData = {
      password: Form.password.value,
      student: {
        admissionSemester,
        academicDepartment: admissionDepartment,
        name: {
          firstName: Form.firstName.value,
          middleName: Form.midName.value,
          lastName: Form.lastName.value,
        },
        gender,
        dateOfBirth: dob,
        bloodGroup,
        email: Form.email.value,
        contactNo: Form.contact.value,
        emergencyContactNo: Form.emergencyContact.value,
        presentAddress: Form.presentAddress.value,
        permanentAddress: Form.permanentAddress.value,
        guardian: {
          fatherName: Form.fatherName.value,
          fatherOccupation: Form.fatherOccupation.value,
          fatherContactNo: Form.fatherContact.value,
          motherName: Form.motherName.value,
          motherOccupation: Form.motherOccupation.value,
          motherContactNo: Form.motherContact.value,
        },
        localGuardian: {
          name: Form.localGuardianName.value,
          occupation: Form.localGuardianOccupation.value,
          contactNo: Form.localGuardianContact.value,
          address: Form.localGuardianAddress.value,
        },
      },
    };
    console.log("Form Data: ", formData);
    toast.loading("Inserting student", { id: sonarId });
    const res = await add(formData).unwrap();
    if (res?.success) {
      toast.success("Student Created Successfully", { id: sonarId });
    }
  };

  if (semesterLoading || departmentLoading) {
    return <Loading />;
  }
  return (
    <div style={{ height: "100vh" }} className="">
      <h1 className="text-xl font-bold">Create Students</h1>

      <div className="mt-6">
        <form action="" onSubmit={hanldeCreateStudent}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                defaultValue="Suvro"
                className="inputBoxForCreateStudent "
                required
              />
            </div>

            <div>
              <p>Middle Name</p>
              <input
                type="text"
                name="midName"
                defaultValue={"Dev"}
                className="inputBoxForCreateStudent "
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                defaultValue="Howlader"
                required
                className="inputBoxForCreateStudent "
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p>Gender</p>
              <select
                name=""
                onChange={handleGender}
                className="inputBoxForCreateStudent"
                value={gender}
              >
                <option value="" disabled>
                  Click One
                </option>
                {genders.map((data, idx) => (
                  <option key={idx} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <p>Date of Birth</p>
              <DatePicker
                onChange={onChange}
                value={dob}
                className="dateStyle"
              />
            </div>
            <div>
              <p>Blood Group</p>
              <select
                value={bloodGroup}
                onChange={handleBloodGroup}
                className="inputBoxForCreateStudent"
              >
                <option value="" disabled>
                  Select one
                </option>
                {bloodGroups.map((data, idx) => (
                  <option key={idx} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            {/* Admission Semester */}
            <div>
              <p>Admission Semester</p>
              <select
                name=""
                onChange={handleAdmissionSemester}
                className="inputBoxForCreateStudent"
                value={admissionSemester}
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
            {/* Admission Department */}
            <div>
              <p>Admission Department</p>
              <select
                name=""
                onChange={handleAdmissionDepartment}
                className="inputBoxForCreateStudent"
                value={admissionDepartment}
              >
                <option value="" disabled>
                  Click One
                </option>
                {allDepartments?.map(
                  (data: { _id: string; name: string }, idx: number) => (
                    <option key={idx} value={data?._id}>
                      {data?.name}
                    </option>
                  )
                )}
              </select>
            </div>
            {/* Password */}
            <div>
              <p>Password</p>
              <input
                type="text"
                name="password"
                defaultValue="123456"
                required
                className="inputBoxForCreateStudent "
                id=""
              />
            </div>
          </div>
          <h1 className="text-xl font-bold my-4">Contact Info</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                defaultValue="suvrodevhowlader1408@gmail.com"
                className="inputBoxForCreateStudent "
                required
              />
            </div>

            <div>
              <p>Contact</p>
              <input
                type="text"
                name="contact"
                defaultValue="01951912997"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p>Emergency Contact</p>
              <input
                type="number"
                name="emergencyContact"
                defaultValue="01951912997"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p>Present Address</p>
              <input
                type="text"
                name="presentAddress"
                defaultValue="Shiv Bari, Khulna"
                className="inputBoxForCreateStudent "
                required
              />
            </div>

            <div>
              <p>Permanent Address</p>
              <input
                type="text"
                name="permanentAddress"
                defaultValue="Mongla,Khulna"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
          </div>
          <h1 className="font-bold text-xl  my-4">Guardian Info</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p>Father Name</p>
              <input
                type="text"
                name="fatherName"
                defaultValue="Narayan Chandra Howlader"
                className="inputBoxForCreateStudent "
                required
              />
            </div>

            <div>
              <p>Father Occupation</p>
              <input
                type="text"
                name="fatherOccupation"
                defaultValue="BussineeMan"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p>Father Contact</p>
              <input
                type="number"
                name="fatherContact"
                defaultValue="01714571567"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p>Mother Name</p>
              <input
                type="text"
                name="motherName"
                defaultValue="Jharna Rani Mistry"
                className="inputBoxForCreateStudent "
                required
              />
            </div>

            <div>
              <p>Mother Occupation</p>
              <input
                type="text"
                name="motherOccupation"
                defaultValue="Teacher"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p>Mother Contact</p>
              <input
                type="number"
                name="motherContact"
                defaultValue="01556748596"
                className="inputBoxForCreateStudent "
              />
            </div>
          </div>
          <h1 className="font-bold text-xl  my-4">Local Guardian Info</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div>
              <p> Name</p>
              <input
                type="text"
                name="localGuardianName"
                defaultValue="Abir"
                className="inputBoxForCreateStudent "
                required
              />
            </div>

            <div>
              <p> Occupation</p>
              <input
                type="text"
                name="localGuardianOccupation"
                defaultValue="Student"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p> Contact</p>
              <input
                type="number"
                name="localGuardianContact"
                defaultValue="01500664488"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p> Address</p>
              <input
                type="text"
                name="localGuardianAddress"
                defaultValue="Khulna"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
          </div>

          <div className="py-4 flex justify-center">
            <button className="btn btn-primary w-full text-white">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
