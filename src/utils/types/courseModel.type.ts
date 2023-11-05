import {type UserModel} from './userModel.type';

export interface CourseModel {
  id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: SyllabusModel[];
  students: UserModel[];
}

interface SyllabusModel {
  week: string;
  topic: string;
  content: string;
}
