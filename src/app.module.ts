import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost', 
    //   port: 5432,  
    //   username: 'postgres',
    //   password: 'akshay',  
    //   database: 'authapp', 
    //   entities: [User],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cv1l7mhu0jms738jjf40-a', 
      port: 5432,  
      username: 'authapp_2ugu_user',
      password: 'xY9p0y777gZcinTuqHBq7Vho2cUSXSRc',  
      database: 'authapp_2ugu', 
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
