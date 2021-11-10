
const urlCRUD = 'https://reqres.in/api/users';

const getUser = async( id ) => {

  const resp = await fetch(`${urlCRUD}/${id}`);
  const { data } = await resp.json();
  return data; 
}

export {
  getUser
}