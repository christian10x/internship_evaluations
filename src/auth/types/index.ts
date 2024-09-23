import { Request } from '@nestjs/common';

export interface RequestWithUser extends Request {
  user: { email: string; role: string };
}
