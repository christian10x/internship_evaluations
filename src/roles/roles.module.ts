import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { DrizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [RolesController],
  providers: [RolesService, ...DrizzleProvider],
  exports: [RolesService],
})
export class RolesModule {}
