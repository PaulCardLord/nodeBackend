import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from '../app.service';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<string> {
    // return id;
    console.log(id, '!!');
    const user = await this.userService.findOne(id);
    console.log(user, user?.firstName)
    return user?.firstName ?? '';
  }

  // @UsePipes(new ValidationPipe())
  // @Post('create')
  // create(@Body() dto: CreateDto) {
  //   return dto;
  // }
}
