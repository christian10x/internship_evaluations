import { IsNotEmpty, IsNumber } from 'class-validator';

export class CrearAsistenciaDto {
  @IsNumber()
  @IsNotEmpty()
  alumnoId: number;

  @IsNumber()
  @IsNotEmpty()
  cursoId: number;

  @IsNumber()
  @IsNotEmpty()
  seccionId: number;

  @IsNumber()
  @IsNotEmpty()
  sesion: number;

  @IsNumber()
  @IsNotEmpty()
  asistencia: number;
}
