import { Test, TestingModule } from '@nestjs/testing';
import { RankingService } from './ranking.service.js';

describe('RankingService', () => {
  let service: RankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RankingService],
    }).compile();

    service = module.get<RankingService>(RankingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('voteCount 기준 내림차순 정렬 및 랭킹 부여', () => {
    expect(service.getRanking()).toEqual([
      { rank: 1, id: 2, name: 'B', voteCount: 30 },
      { rank: 2, id: 3, name: 'C', voteCount: 20 },
      { rank: 3, id: 1, name: 'A', voteCount: 10 },
    ]);
  });
});
