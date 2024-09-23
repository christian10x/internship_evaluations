import {
  Controller,
  Get,
  // Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RequestWithUser } from 'src/auth/types';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() createUserDto: CreateUserDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to create a user',
      );
    }

    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to view all users',
      );
    }

    return this.usersService.findAll();
  }

  @Get('/:id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException('You do not have permission to view a user');
    }

    return this.usersService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to update a user',
      );
    }

    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/:id')
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user.role !== 'ADMINISTRADOR') {
      throw new ForbiddenException(
        'You do not have permission to delete a user',
      );
    }

    return this.usersService.remove(+id);
  }
}
