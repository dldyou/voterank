import { Test, TestingModule } from '@nestjs/testing';
import { PollsService } from './polls.service.js';

describe('PollsService', () => {
  let service: PollsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollsService],
    }).compile();

    service = module.get<PollsService>(PollsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('비었을 때의 create()', () => {
    expect(service.create('title01', 'description01')).toEqual({
      id: 1,
      title: 'title01',
      description: 'description01',
    });
  });

  it('비었을 때의 findAll()', () => {
    expect(service.findAll()).toEqual([]);
  });
});
