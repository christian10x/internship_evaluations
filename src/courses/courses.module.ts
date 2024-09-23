import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { DrizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [CoursesService, ...DrizzleProvider],
  exports: [],
})
export class CoursesModule {}
