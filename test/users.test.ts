import axios from 'axios'
import { expect, test } from 'vitest'

test('Deve listar todos os usuários', async () => {
    const response = await axios({
        url: `http://localhost:8000/users`,
        method: 'GET',
        validateStatus: () => true
    })
  
    expect(response.status).toEqual(200)
})
