import { IsNotEmpty } from 'class-validator';

export class Student {
  id: number;
  identification: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  phone: string;
}
