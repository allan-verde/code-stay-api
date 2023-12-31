import axios from 'axios'
import { expect, test } from 'vitest'

test('Deve verificar a vida da aplicação', async () => {
    const response = await axios({
        url: `http://localhost:8000`,
        method: 'GET',
        validateStatus: () => true
    })

    expect(response.status).toEqual(200)
})
