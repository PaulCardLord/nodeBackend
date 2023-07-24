import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('database_maintenance'));
        return {
          type: 'postgres',
          host: configService.get('database_host'),
          port: Number(configService.get('database_port')) as number,
          username: configService.get('database_user_name') as string,
          password: configService.get('database_password') as string,
          database: configService.get('database_maintenance') as string,
          autoLoadEntities: true,
          synchronize: true,
        }
      },
      inject: [ConfigService],
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
