import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'
const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start,end)=> {
        return movies.slice(start,end)
    }
  return (
    <SliderWrapper>
        <MovieSlider data={getMoviesBetween(0,10)} title='Only on netflix'/>
        <MovieSlider data={getMoviesBetween(10,20)} title='Trending now'/>
        <MovieSlider data={getMoviesBetween(20,30)} title='Popular on netflix'/>
        <MovieSlider data={getMoviesBetween(30,40)} title='Romantic movie'/>
        <MovieSlider data={getMoviesBetween(40,50)} title='Epic'/>
        <MovieSlider data={getMoviesBetween(50,60)} title='New Release'/>
        <MovieSlider data={getMoviesBetween(60,70)} title='Horror'/>
        <MovieSlider data={getMoviesBetween(70,80)} title='Action movies'/>
    </SliderWrapper>
  )
}
const SliderWrapper = styled.div`

`
export default SliderContainer