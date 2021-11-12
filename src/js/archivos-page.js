
const body = document.body;
let inputFile, imgFoto;

const crearInput = () => {
  
  const html = `
    <h1 class="mt-5">Subir archivos </h1>
    <hr>
    <label>
    Selecione una imagen:
    <input type="file" accept="image/png, img/jpeg"/>
    </label>
    <br>
    <img id="foto" class="img-thumbnail" src"">
  `;
  const div = document.createElement('div');
  div.innerHTML = html;
  body.append( div );

  inputFile = document.querySelector('input');
  imgFoto   = document.querySelector('#foto');
}

const eventos = () => {

  inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    console.log( file );
  });

}


export const init = () => {
  crearInput();
  eventos();
}
