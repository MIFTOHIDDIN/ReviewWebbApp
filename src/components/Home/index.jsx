import React, { useEffect } from 'react'
import { Button, Container, Wrap } from './style'
import { ReviewCard } from './Review Card'
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../context/Movei';


export const Home = () => {
  const navigate = useNavigate()
  const [ state, dispatch ] = useMovieContext()

  const onClick = () => {
    navigate( '/book' )
  }
  useEffect( () => {
    dispatch( { type: 'all' } )
  }, [] );

  console.log( state, 'sta' );
  return (
    <>
      <Wrap.Button>

        <Button onClick={ onClick } >
          Do you want to add new Review?
        </Button>
      </Wrap.Button>
      <Wrap>

        <Wrap.Title>
          Recently added Reviews
        </Wrap.Title>
      </Wrap>
      <Container>

        { state?.map && state?.map( ( value ) => {
          return <ReviewCard key={ value._id } data={ value } />;
        } ) }

      </Container>
    </>
  );
};
export default Home