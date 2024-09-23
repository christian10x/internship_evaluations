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
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RequestWithUser } from 'src/auth/types';

@ApiTags('Roles')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() createRoleDto: CreateRoleDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to create a role',
      );
    }

    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view all roles',
      );
    }

    return this.rolesService.findAll();
  }

  @Get('/:id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException('You do not have permission to view a role');
    }

    return this.rolesService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to update a role',
      );
    }

    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete('/:id')
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to delete a role',
      );
    }

    return this.rolesService.remove(+id);
  }
}
