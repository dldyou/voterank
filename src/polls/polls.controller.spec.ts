import { Test, TestingModule } from '@nestjs/testing';
import { PollsController } from './polls.controller.js';
import { PollsService } from './polls.service.js';

describe('PollsController', () => {
  let controller: PollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollsController],
      providers: [PollsService],
    }).compile();

    controller = module.get<PollsController>(PollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
