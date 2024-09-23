import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAssistanceDto {
  @IsNumber()
  @IsNotEmpty()
  userIdAssistant: number;

  @IsNumber()
  @IsNotEmpty()
  assigmentId: number;

  @IsNumber()
  @IsNotEmpty()
  assisted: number;
}
