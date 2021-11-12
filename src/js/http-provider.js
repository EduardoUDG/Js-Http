

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'n3j7wzto';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/eduardoudg/upload';

const obtenerChiste = async() => {
  try {

    const resp = await fetch(jokeUrl);
    if ( !resp.ok ) throw 'No se pudo realizar la peticion';
    const { icon_url, id, value } = await resp.json();
    return { icon_url, id, value };
    
  } catch( err ) {
    throw err;
  }
}


const obtenerUsuarios = async() => {

  const resp = await fetch(urlUsuarios);
  const { data:usuarios } = await resp.json();
  return usuarios;
}

// ArchivoSubir :: File
const subirImagen = async( ArchivoSubir ) => {

  const formData = new FormData();
  formData.append('upload_preset', cloudPreset);
  formData.append('file', ArchivoSubir);

  try {
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData

    })
    if( resp.ok ) {
      const cloudRes = await resp.json();
      // console.log( cloudRes );
      return cloudRes.secure_url;
    } else {
      throw await resp.json();
    }

  } catch (error) {
    throw error;    
  }
}

export {
  obtenerChiste,
  obtenerUsuarios,
  subirImagen
}

