
const urlCRUD = 'https://reqres.in/api/users';

const getUser = async( id ) => {

  const resp = await fetch(`${urlCRUD}/${id}`);
  const { data } = await resp.json();
  return data; 
}

const createUser = async( usuario ) => {
  const resp = await fetch(urlCRUD, {
    method: 'POST',
    body: JSON.stringify( usuario ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await resp.json();
}


const updateUser = async( id, usuario  ) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'PUT',
    body: JSON.stringify( usuario ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await resp.json();
}

const deleteUser = async( id ) => {

  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'DELETE',
  });

  console.log( resp.ok ); // true
  return ( resp.ok ) ? 'Borrado': 'no se pudo eliminar';
}

export {
  getUser,
  createUser,
  updateUser,
  deleteUser
}