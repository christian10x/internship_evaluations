import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAssignmentDto {
  @IsNumber()
  @IsNotEmpty()
  courseId: number;

  @IsNumber()
  @IsNotEmpty()
  sectionId: number;

  @IsNumber()
  @IsNotEmpty()
  session: number;

  @IsNumber()
  @IsNotEmpty()
  userIdAssigned: number;
}
