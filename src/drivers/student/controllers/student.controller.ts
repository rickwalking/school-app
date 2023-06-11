import { Body, Controller, Get, Post } from '@nestjs/common';
import { ICreateStudentDTO } from 'src/core/student/application/dtos/create-student.dto';
import { IFindStudentDTO } from 'src/core/student/application/dtos/find-student.dto';
import { StudentService } from 'src/core/student/application/services/student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {
    //
  }

  @Post()
  async create(@Body() createStudentDto: ICreateStudentDTO): Promise<void> {
    await this.studentService.create(createStudentDto);
  }

  @Get()
  async index(): Promise<IFindStudentDTO[]> {
    return await this.studentService.index();
  }
}
