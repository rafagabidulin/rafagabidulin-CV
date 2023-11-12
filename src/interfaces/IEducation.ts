export interface IDegrees {
  title: string;
  university: string;
  faculty: string;
  specialization: string;
  graduated: string;
}

export interface IHigher {
  title: string;
  degrees: IDegrees[];
}

export interface ICourse {
  id: string;
  name: string;
  date: string;
}

export interface ISchools {
  school: string;
  courses: ICourse[];
}

export interface IAdditional {
  title: string;
  schools: ISchools[];
}

export default interface IEducation {
  higher: IHigher;
  additional: IAdditional;
}
