import axios from 'axios'
import { describe, expect, it, test } from 'vitest'

test('Deve criar um novo hotel', async () => {
  const response = await axios({
      url: `http://localhost:8000/hotels`,
      method: 'POST',
      data: {
        name: "Hotel A",
        address: "123 Example Street",
        city: "San Luiz",
        country: "Brazil",
        description: "Description test"
      },
      validateStatus: () => true
  })
  const novoHotel = response.data
  expect(novoHotel.name).toBe('Hotel Teste')
  expect(novoHotel.city).toBe('São Paulo')
})

test('Deve listar todos os hoteis', async () => {
    const response = await axios({
        url: `http://localhost:8000/hotels`,
        method: 'GET',
        validateStatus: () => true
    })
    const hoteis = response.data
    expect(hoteis.length).not.toBe(0)
})

describe('Testes de mostragem da rota /hotels/:id', () => {
  it('Deve retornar um hotel existente por ID', async () => {
    const id = 1
    const response = await axios({
        url: `http://localhost:8000/hotels/${id}`,
        method: 'GET',
        validateStatus: () => true
    })

    expect(response.status).toBe(200)
    expect(response.data.id).toBe(id)
  })

  it('Deve retornar erro 404 para um hotel inexistente', async () => {
    const id = 9999
    const response = await axios({
        url: `http://localhost:8000/hotels/${id}`,
        method: 'GET',
        validateStatus: () => true
    })

    expect(response.status).toEqual(404)
    expect(response.data.message).toBe('Hotel não encontrado')
  })
})

describe('Testes de exclusão da rota /hotels/:id', () => {
    it('Deve excluir um hotel existente por ID', async () => {
      const id = 1
      const response = await axios({
          url: `http://localhost:8000/hotels/${id}`,
          method: 'DELETE',
          validateStatus: () => true
      })
  
      expect(response.status).toBe(204)
    })
  
    it('Deve retornar erro 404 para um hotel inexistente', async () => {
      const id = 9999
      const response = await axios({
          url: `http://localhost:8000/hotels/${id}`,
          method: 'DELETE',
          validateStatus: () => true
      })
  
      expect(response.status).toEqual(404)
      expect(response.data.message).toBe('Hotel não encontrado')
    })
})
