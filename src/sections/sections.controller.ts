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
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RequestWithUser } from 'src/auth/types';

@ApiTags('Sections')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() createSectionDto: CreateSectionDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to create a section',
      );
    }

    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view all sections',
      );
    }

    return this.sectionsService.findAll();
  }

  @Get('/:id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view a section',
      );
    }

    return this.sectionsService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to update a section',
      );
    }

    return this.sectionsService.update(+id, updateSectionDto);
  }

  @Delete('/:id')
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to delete a section',
      );
    }

    return this.sectionsService.remove(+id);
  }
}
