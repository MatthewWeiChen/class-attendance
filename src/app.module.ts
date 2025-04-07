import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaNoSpecService } from './prisma--no-spec/prisma--no-spec.service';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
  providers: [PrismaNoSpecService],
})
export class AppModule {}
