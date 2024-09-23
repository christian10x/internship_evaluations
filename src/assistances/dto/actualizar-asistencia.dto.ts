import { PartialType } from '@nestjs/swagger';
import { CrearAsistenciaDto } from './crear-asistencia.dto';

export class ActualizarAsistenciaDto extends PartialType(CrearAsistenciaDto) {}
