import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { ContactStatus } from '../enums';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  subject: string;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  phone?: string;
}

export class UpdateContactDto {
  @IsOptional()
  @IsEnum(ContactStatus)
  status?: ContactStatus;

  @IsOptional()
  @IsString()
  adminReply?: string;
}
