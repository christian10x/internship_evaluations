import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { DrizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [SectionsController],
  providers: [SectionsService, ...DrizzleProvider],
  exports: [],
})
export class SectionsModule {}
