import { PartialType } from '@nestjs/swagger';
import { CreateAssistanceDto } from './create-assistance.dto';

export class UpdateAssistanceDto extends PartialType(CreateAssistanceDto) {}
