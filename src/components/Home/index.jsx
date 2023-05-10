import React, { useEffect, useState } from 'react'
import { Button, Container, Wrap } from './style'
import { ReviewCard } from './Review Card'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()
  const [ data, setData ] = useState( [] );
  const onClick = () => {
    navigate( '/book' )
  }
  useEffect( () => {
    fetch( "http://localhost:5003/books" )
      .then( ( res ) => res.json() )
      .then( ( res ) => setData( res ) );
  }, [] );
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

        { data.map( ( value ) => {
          return <ReviewCard key={ value._id } data={ value } />;
        } ) }

      </Container>
    </>
  );
};
export default Home