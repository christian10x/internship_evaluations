import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DrizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, ...DrizzleProvider],
  exports: [UsersService],
})
export class UsersModule {}
