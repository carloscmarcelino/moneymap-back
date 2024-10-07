import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, AuthenticatedRequest } from 'src/types';
import { ExitsService } from './exits.service';
import { ExitsEntity } from './exits.entity';
import { CreateExitsDto } from './dto/create-exits.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('exits')
@UseGuards(JwtAuthGuard)
export class ExitsController {
  constructor(private readonly expensesService: ExitsService) {}

  @Get()
  get(@Req() req: AuthenticatedRequest): Promise<ApiResponse<ExitsEntity>> {
    const userId = req.user.id;

    return this.expensesService.get(userId);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<ExitsEntity> {
    return this.expensesService.getById(id);
  }

  @Post()
  create(
    @Body() body: CreateExitsDto,
    @Req() req: AuthenticatedRequest,
  ): Promise<ExitsEntity> {
    const userId = req.user.id;

    return this.expensesService.create(body, userId);
  }

  @Patch(':id')
  updateById(@Body() body: CreateExitsDto, @Param('id') id: string) {
    return this.expensesService.update(body, id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.expensesService.delete(id);
  }
}
