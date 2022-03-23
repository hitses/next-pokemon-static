import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    return {
      id: data.id,
      name: data.name,
      sprites: {
        back_default: data.sprites.back_default,
        back_shiny: data.sprites.back_shiny,
        front_default: data.sprites.front_default,
        front_shiny: data.sprites.front_shiny,
        other: {
          dream_world: {
            front_default: data.sprites.other?.dream_world.front_default
          }
        }
      }
    }
  } catch (err) {
    return null
  }
}
