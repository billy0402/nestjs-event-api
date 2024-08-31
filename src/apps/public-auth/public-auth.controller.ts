import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ZodSerializerDto } from 'nestjs-zod';

import {
  LoginInDto,
  RefreshInDto,
  RegisterInDto,
  TokenPayloadDto,
  UserInfoDto,
} from '@/dto/auth.dto';
import { AuthGuard } from '@/guards/auth/auth.guard';
import { UsersService } from '@/services/users/users.service';

import { PublicAuthService } from './public-auth.service';

@ApiTags('public-auth')
@Controller('public/auth')
export class PublicAuthController {
  constructor(
    private readonly publicAuthService: PublicAuthService,
    private userService: UsersService,
  ) {}

  @ApiOkResponse({ type: TokenPayloadDto })
  @HttpCode(HttpStatus.OK)
  @ZodSerializerDto(TokenPayloadDto)
  @Post('login')
  async login(@Body() data: LoginInDto) {
    return await this.publicAuthService.login(data);
  }

  @ApiOkResponse({ type: TokenPayloadDto })
  @HttpCode(HttpStatus.OK)
  @ZodSerializerDto(TokenPayloadDto)
  @Post('refresh')
  async refresh(@Body() data: RefreshInDto) {
    return await this.publicAuthService.refresh(data.refreshToken);
  }

  @ApiCreatedResponse({ type: UserInfoDto })
  @ZodSerializerDto(UserInfoDto)
  @Post('register')
  async register(@Body() data: RegisterInDto) {
    return await this.userService.create(data);
  }

  @ApiOkResponse({ type: UserInfoDto })
  @ZodSerializerDto(UserInfoDto)
  @UseGuards(AuthGuard)
  @Get('me')
  me(@Request() request) {
    return request.user;
  }
}
