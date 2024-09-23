import { Module } from '@nestjs/common';
import { AssistancesService } from './assistances.service';
import { AssistancesController } from './assistances.controller';
import { DrizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [AssistancesController],
  providers: [AssistancesService, ...DrizzleProvider],
  exports: [],
})
export class AssistancesModule {}
