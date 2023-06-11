import { ICreateStudentDTO } from '../dtos/create-student.dto';
import { IFindStudentDTO } from '../dtos/find-student.dto';
import { IUpdateStudentDTO } from '../dtos/update-student.dto';

export interface IStudentRepository {
  createStudent(student: ICreateStudentDTO): Promise<void>;
  updateStudent(student: IUpdateStudentDTO): Promise<void>;
  findById(id: string): Promise<IFindStudentDTO | undefined>;
  findAll(): Promise<IFindStudentDTO[]>;
  deleteStudent(id: string): Promise<void>;
}
