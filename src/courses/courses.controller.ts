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
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RequestWithUser } from 'src/auth/types';

@ApiTags('Courses')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to create a course',
      );
    }

    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view all courses',
      );
    }

    return this.coursesService.findAll();
  }

  @Get('/:id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view a course',
      );
    }

    return this.coursesService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to update a course',
      );
    }

    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete('/:id')
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to delete a course',
      );
    }

    return this.coursesService.remove(+id);
  }
}
