import { Injectable } from '@nestjs/common'
import * as neo4j from 'neo4j-driver'

@Injectable()
export class Neo4jService {

  private db = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
  )

  constructor() {

  }

  async findAll(): Promise<any> {
    return this.db.session().run('MATCH (n:Movie) RETURN n LIMIT 5')
  }
}
