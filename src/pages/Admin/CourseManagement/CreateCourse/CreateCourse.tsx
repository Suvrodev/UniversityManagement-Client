import { FormEvent, useEffect, useState } from "react";

///Multiple Selection
import { Select } from "antd";
import {
  useAddNewCourseMutation,
  useGetAllCoursesQuery,
} from "../../../../redux/features/Admin/courseManagementApi";
import Loading from "../../../../components/Loading/Loading";
import { toast } from "sonner";
import { sonarId } from "../../../../utils/sonarId";

type TShowCourse = {
  value: string;
  label: string;
};

type TPreRequisiteCourse = {
  course: string;
  isDeleted: boolean;
};

const CreateCourse = () => {
  const [add] = useAddNewCourseMutation();

  const { data: allCoursesData, isLoading } = useGetAllCoursesQuery(undefined);
  // const allCourses = allCoursesData?.data;
  // console.log("All Courses: ", allCourses);

  const [showCourses, setShowCourses] = useState<TShowCourse[]>([]);
  const [preRequistCourse, setPreRequistCourse] = useState<string[]>([]);

  useEffect(() => {
    if (allCoursesData?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedCourses = allCoursesData.data.map((course: any) => ({
        value: course._id,
        label: course.title,
      }));
      setShowCourses(formattedCourses);
    } else {
      console.log("No courses data available.");
    }
  }, [allCoursesData]);
  // console.log("Show Courses: ", showCourses);

  const handleChange = (value: string[]) => {
    // console.log(`Selected: ${value}`);
    setPreRequistCourse(value);
  };
  console.log("Pre requiest Courses: ", preRequistCourse);

  const handleSubmitCourse = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const title = Form.titlee.value;
    const prefix = Form.prefixx.value;
    const code = parseFloat(Form.code.value);
    const credits = parseFloat(Form.credit.value);

    const formattedPreRequistCourse: TPreRequisiteCourse[] =
      preRequistCourse.map((courseId) => ({
        course: courseId,
        isDeleted: false,
      }));

    const formData = {
      title,
      prefix,
      code,
      credits,
      isDeleted: false,
      preRequisiteCourses: formattedPreRequistCourse,
    };

    console.log("Form Data");
    console.log(formData);
    toast.loading("Inserting Data: ", { id: sonarId });
    const res = await add(formData).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success("Data added successfully", { id: sonarId });
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Create Course</h1>
      <div className="w-full md:w-1/2 mx-auto border-2 border-gray-400 p-4 rounded-lg">
        <form action="" onSubmit={handleSubmitCourse}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div>
              <p>Title</p>
              <input
                type="text"
                name="titlee"
                defaultValue="Computer"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p>Prefix</p>
              <input
                type="text"
                name="prefixx"
                defaultValue="JS"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
          </div>

          <div className=" my-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div>
              <p>Code</p>
              <input
                type="number"
                name="code"
                defaultValue="108"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
            <div>
              <p>Credit</p>
              <input
                type="text"
                name="credit"
                defaultValue="3"
                className="inputBoxForCreateStudent "
                required
              />
            </div>
          </div>

          <div className="w-full my-4">
            <p>Pre Requist Course</p>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Select or enter tags"
              onChange={handleChange}
              options={showCourses}
            />
          </div>
          <div className="flex justify-center my-4 ">
            <button className="btn w-full btn-primary text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
