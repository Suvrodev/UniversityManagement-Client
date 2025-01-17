export type TUser = {
  userId: string;
  role: string;
  exp: number;
  iat: number;
};

export type TSemester = {
  _id: string;
  name: string;
  code: string;
  year: string;
  startMonth: string;
  endMonth: string;
};
// export type TUserNotFound={
//  error:{
//   data:{
//     err:object,
//     errorSources:
//   }
//  }
// }
