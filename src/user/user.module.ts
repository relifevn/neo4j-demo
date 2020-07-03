import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { Neo4jModule } from 'src/neo4j/neo4j.module'

@Module({
  imports: [
    Neo4jModule,
  ],
  providers: [
    UserService,
  ],
  controllers: [
    UserController,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule { }
