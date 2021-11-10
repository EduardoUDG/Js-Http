import { obtenerUsuarios } from "./http-provider";

const body  = document.body;
let tbody;
let contador = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    tbody = document.querySelector('tbody');
}


const crearFilaUsuario = ( user ) => {

    contador++;
    const html = `
        <td scope="col">${contador}</td>
        <td scope="col">${user.email}</td>
        <td scope="col">${user.first_name} ${user.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}">    
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild( tr );
}


export const init = async() => {

    crearHtml();
    contador = 0;

    (await obtenerUsuarios()).forEach( crearFilaUsuario );

    // const users = await obtenerUsuarios();
    // users.forEach( user => {
    //     crearFilaUsuario( user );
    // });
}

