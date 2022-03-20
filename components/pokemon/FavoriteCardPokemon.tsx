import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Card, Grid } from '@nextui-org/react'

interface Props {
  PokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({PokemonId}) => {
  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${PokemonId}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={PokemonId} onClick={onFavoriteClicked}>
      <Card
        hoverable
        clickable
        css={{ padding: 10 }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${PokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}
