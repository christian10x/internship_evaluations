import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { AssistancesService } from './assistances.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RequestWithUser } from 'src/auth/types';
import { CrearAsistenciaDto } from './dto/crear-asistencia.dto';
import { ActualizarAsistenciaDto } from './dto/actualizar-asistencia.dto';

@ApiTags('Assistances')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('assistances')
export class AssistancesController {
  constructor(private readonly assistancesService: AssistancesService) {}

  @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() crearAsistenciaDto: CrearAsistenciaDto,
  ) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.create(crearAsistenciaDto);
    } else {
      throw new ForbiddenException(
        'You do not have permission to create an assistance',
      );
    }
  }

  // @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.findAll();
    } else {
      throw new ForbiddenException(
        'You do not have permission to get all assistances',
      );
    }
  }

  // @Get('/:id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.findOne(+id);
    } else {
      throw new ForbiddenException(
        'You do not have permission to get an assistance',
      );
    }
  }

  @Patch('/:id')
  update(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() actualizarAsistenciaDto: ActualizarAsistenciaDto,
  ) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.update(+id, actualizarAsistenciaDto);
    } else {
      throw new ForbiddenException(
        'You do not have permission to update an assistance',
      );
    }
  }

  // @Delete('/:id')
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.remove(+id);
    } else {
      throw new ForbiddenException(
        'You do not have permission to delete an assistance',
      );
    }
  }

  @Get('/student/:studentId')
  findByStudentId(
    @Request() req: RequestWithUser,
    @Param('studentId') studentId: string,
  ) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.findByStudentId(+studentId);
    } else {
      throw new ForbiddenException(
        'You do not have permission to get an assistance',
      );
    }
  }

  @Get('/students/:courseId/:sectionId')
  findStudentsByCourseAndSection(
    @Request() req: RequestWithUser,
    @Param('courseId') courseId: string,
    @Param('sectionId') sectionId: string,
  ) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.findStudentsByCourseAndSection(
        +courseId,
        +sectionId,
      );
    } else {
      throw new ForbiddenException(
        'You do not have permission to get an assistance',
      );
    }
  }

  @Get('/:courseId/:sectionId')
  findByCourseAndSection(
    @Request() req: RequestWithUser,
    @Param('courseId') courseId: string,
    @Param('sectionId') sectionId: string,
  ) {
    if (req.user.role == 'ADMINISTRADOR' || req.user.role == 'PROFESOR') {
      return this.assistancesService.findByCourseAndSection(
        +courseId,
        +sectionId,
      );
    } else {
      throw new ForbiddenException(
        'You do not have permission to get an assistance',
      );
    }
  }
}
