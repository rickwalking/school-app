import { ICreateStudentDTO } from '../dtos/create-student.dto';
import { IStudentRepository } from '../ports/student.repository';

export class StudentService {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async create(student: ICreateStudentDTO) {
    return this.studentRepository.createStudent(student);
  }

  async index() {
    return this.studentRepository.findAll();
  }
}
