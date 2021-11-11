// import { init } from './js/chistes-page';
import * as CRUD from './js/cruid-provider';


// CRUD.getUser( 1 )
//   .then( console.log );

// CRUD.createUser({
//   name: 'Eduardo',
//   job: 'Student'
// }).then( console.log );

// CRUD.updateUser( 1, {
//   name: 'Carlos',
//   job: 'Software Enginier'
// }).then( console.log );

CRUD.deleteUser( 2 )
  .then( console.log );