import { IsEmail, IsBoolean, IsOptional, IsString } from 'class-validator';

export class SubscribeNewsletterDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBoolean()
  marketingConsent?: boolean;
}

export class UnsubscribeNewsletterDto {
  @IsEmail()
  email: string;
}
