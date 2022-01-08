let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnperro');

const url = "http://localhost:4000/gatos"

// como consumir las promesas////
async function ObtenerPerros(url)
{
    const res = await fetch(url) 
    const data = await res.json()
    console.log(data)
}

const ObtenerGatos = async (url) =>
{
    const res = await fetch(url)
    const data2 = await res.json()
    console.log(data2)
}

ObtenerPerros(url)
ObtenerGatos(url)

const getMascota = async (url) =>{

    let muestraMascota = document.querySelector(".grid-mascotas")
    muestraMascota.innerHTML = '';
   
    const resp = await fetch(url);
    const data = await resp.json();

      data.forEach(mascota => {
        const {imagen,nombre,raza} = mascota;
        muestraMascota.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
}

 btnGato.addEventListener('click', () => {
    getMascota('http://localhost:4000/gatos');
 })

 btnPerro.addEventListener('click', () => {
     getMascota('http://localhost:4004/perros');
 })

