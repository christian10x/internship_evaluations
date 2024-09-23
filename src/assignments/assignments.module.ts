import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { DrizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [AssignmentsController],
  providers: [AssignmentsService, ...DrizzleProvider],
  exports: [],
})
export class AssignmentsModule {}
