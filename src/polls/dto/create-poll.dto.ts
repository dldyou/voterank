import { IsString, Matches } from 'class-validator';

export class CreatePollDto {
  @IsString()
  @Matches(/\S/, { message: 'title은 공백이 아니어야 합니다' })
  title: string;

  @IsString()
  description: string;
}
