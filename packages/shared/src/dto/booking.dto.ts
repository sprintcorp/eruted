import { IsString, IsEmail, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { BookingType, BookingStatus } from '../enums';

export class CreateBookingDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsDateString()
  eventDate: string;

  @IsEnum(BookingType)
  eventType: BookingType;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  budget?: string;
}

export class UpdateBookingDto {
  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;

  @IsOptional()
  @IsString()
  adminNotes?: string;
}
