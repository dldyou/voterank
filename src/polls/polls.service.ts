import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePollDto } from './dto/update-poll.dto.js';
import { CreatePollDto } from './dto/create-poll.dto.js';

type Poll = {
  id: number;
  title: string;
  description: string;
};

@Injectable()
export class PollsService {
  private polls: Poll[] = [];
  private current_id = 1;

  create(body: CreatePollDto): Poll {
    let id = this.current_id++;
    const poll: Poll = {
      id: id,
      title: body.title,
      description: body.description,
    };

    this.polls.push(poll);

    return poll;
  }

  findAll(): Poll[] {
    return this.polls;
  }

  findOne(id: number): Poll {
    const poll = this.polls.find((poll) => poll.id == id);

    if (!poll) {
      throw new NotFoundException('투표 이벤트를 찾을 수 없습니다.');
    }
    return poll;
  }

  update(id: number, body: UpdatePollDto): Poll {
    const poll = this.findOne(id);

    if (body.title !== undefined) {
      poll.title = body.title;
    }

    if (body.description !== undefined) {
      poll.description = body.description;
    }

    return poll;
  }
}
