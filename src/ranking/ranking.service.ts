import { Injectable } from '@nestjs/common';

type Candidate = {
  id: number;
  name: string;
  voteCount: number;
};

type RankingItem = {
  rank: number;
  id: number;
  name: string;
  voteCount: number;
};

@Injectable()
export class RankingService {
  private readonly candidates: Candidate[] = [
    { id: 1, name: 'A', voteCount: 10 },
    { id: 2, name: 'B', voteCount: 30 },
    { id: 3, name: 'C', voteCount: 20 },
  ];

  getRanking(): RankingItem[] {
    return [...this.candidates]
      .sort((a, b) => b.voteCount - a.voteCount)
      .map((candidate, index) => ({
        rank: index + 1,
        id: candidate.id,
        name: candidate.name,
        voteCount: candidate.voteCount,
      }));
  }
}
