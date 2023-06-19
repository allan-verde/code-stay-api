import axios from 'axios'
import { expect, test } from 'vitest'

// given, when, then - arrange, act, assert
test('Deve listar todas os hoteis', async () => {
    const response = await axios({
        url: `http://localhost:8000/hotels`,
        method: 'GET'
    })
    const hoteis = response.data
    expect(hoteis.length).toBe(5)
})
