import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from './mail.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, MailService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET_KEY',
            secretOrPrivateKey: process.env.PRIVATE_KEY || 'SECRET_KEY',
            signOptions: {
                expiresIn: '86400s'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule,
        MailService
    ]
})
export class AuthModule {}
