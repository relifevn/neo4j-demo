import { Module } from '@nestjs/common'
import { Neo4jService } from './neo4j.service'
import * as neo4j from 'neo4j-driver'

// export const Neo4jProvider = {
//   provide: 'Neo4j',
//   userFactory: () => neo4j.driver(
//     'bolt://localhost:7687',
//     neo4j.auth.basic('neo4j', 'neo4j')
//   ),
//   useExisting: Neo4jService,
// }

@Module({
  imports: [

  ],
  controllers: [

  ],
  providers: [
    Neo4jService,
    // Neo4jProvider,
  ],
  exports: [
    Neo4jService,
  ],
})
export class Neo4jModule { }
