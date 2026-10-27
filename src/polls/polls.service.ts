import { Injectable } from '@nestjs/common';

type Poll = {
  id: number;
  title: string;
  description: string;
};

@Injectable()
export class PollsService {
  private polls: Poll[] = [];
  private current_id = 1;

  create(title: string, description: string): Poll {
    let id = this.current_id++;
    const poll: Poll = {
      id: id,
      title: title,
      description: description,
    };

    this.polls.push(poll);

    return poll;
  }

  findAll(): Poll[] {
    return this.polls;
  }
}
