import { IsString, Matches, ValidateIf } from 'class-validator';

export class UpdatePollDto {
  @ValidateIf((_, value: unknown) => value !== undefined)
  @IsString()
  @Matches(/\S/, { message: 'title은 공백이 아니어야 합니다' })
  title?: string;

  @ValidateIf((_, value: unknown) => value !== undefined)
  @IsString()
  description?: string;
}
