import { DataSource } from 'typeorm'
import ormconfig from './ormconfig'

const myDataSource = new DataSource(ormconfig)

export default myDataSource
