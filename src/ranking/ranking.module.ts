import { Module } from '@nestjs/common';
import { RankingService } from './ranking.service.js';
import { RankingController } from './ranking.controller.js';

@Module({
  providers: [RankingService],
  controllers: [RankingController],
})
export class RankingModule {}
