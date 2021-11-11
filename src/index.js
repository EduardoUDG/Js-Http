// import { init } from './js/chistes-page';
import * as CRUD from './js/cruid-provider';


CRUD.getUser( 1 )
  .then( console.log );

CRUD.createUser({
  name: 'Eduardo',
  job: 'Student'
}).then( console.log );