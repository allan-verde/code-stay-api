import { Hotel } from '../entities/hotel.entity'
import myDataSource from '../../app-data-source'

export const HotelRepository = myDataSource.getRepository(Hotel).extend({
    findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("hotel")
            .where("hotel.firstName = :firstName", { firstName })
            .andWhere("hotel.lastName = :lastName", { lastName })
            .getMany()
    },
})
