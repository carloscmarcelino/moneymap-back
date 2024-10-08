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
import { InvestmentsService } from './investments.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { InvestmentTypesEntity } from './entity/types.entity';
import { InvestmentsEntity } from './entity/investments.entity';

@Controller('investments')
@UseGuards(JwtAuthGuard)
export class InvestmentsController {
  constructor(private readonly investimentsService: InvestmentsService) {}

  @Get()
  get(
    @Req() req: AuthenticatedRequest,
  ): Promise<ApiResponse<InvestmentsEntity>> {
    const userId = req.user.id;

    return this.investimentsService.get(userId);
  }

  @Get('types')
  getTypes(): Promise<ApiResponse<InvestmentTypesEntity>> {
    return this.investimentsService.getTypes();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<InvestmentsEntity> {
    return this.investimentsService.getById(id);
  }

  @Post()
  create(
    @Body() body: CreateInvestmentDto,
    @Req() req: AuthenticatedRequest,
  ): Promise<InvestmentsEntity> {
    const userId = req.user.id;

    return this.investimentsService.create(body, userId);
  }

  @Patch(':id')
  update(
    @Body() body: CreateInvestmentDto,
    @Param('id') id: string,
  ): Promise<InvestmentsEntity> {
    return this.investimentsService.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.investimentsService.delete(id);
  }
}
