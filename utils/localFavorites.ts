const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  favorites.includes(id) ?
  favorites = favorites.filter(pokeId => pokeId !== id) :
  favorites.push(id)

  favorites.sort((a, b) => a - b)

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false
  
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorite,
  existInFavorites,
  pokemons
}