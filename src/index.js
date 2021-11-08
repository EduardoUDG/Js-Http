

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl)
//   .then( res => {
//     res.json().then( ({ id, value }) => {
//       console.log( id );
//       console.log( value );
//     });
//   });


fetch(jokeUrl)
  .then( res => res.json() )
  .then( ({ id, value }) => {
    console.log( id, value )
  });



