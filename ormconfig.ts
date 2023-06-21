import { DataSourceOptions } from 'typeorm'

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['src/entities/*.ts'],
    synchronize: true
}

export default config
