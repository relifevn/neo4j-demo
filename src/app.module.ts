import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Neo4jService } from './neo4j/neo4j.service'
import { Neo4jModule } from './neo4j/neo4j.module'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    Neo4jModule,
    UserModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
