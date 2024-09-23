import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RequestWithUser } from 'src/auth/types';

@ApiTags('Assignments')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() createAssignmentDto: CreateAssignmentDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to create a assignment',
      );
    }

    return this.assignmentsService.create(createAssignmentDto);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view all assignments',
      );
    }

    return this.assignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view a assignment',
      );
    }

    return this.assignmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() updateAssignmentDto: UpdateAssignmentDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to update a assignment',
      );
    }

    return this.assignmentsService.update(+id, updateAssignmentDto);
  }

  @Delete(':id')
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to delete a assignment',
      );
    }

    return this.assignmentsService.remove(+id);
  }
}
