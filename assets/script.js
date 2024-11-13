"use strict";
console.clear();

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// *Bonus*
// - Rendere l’esercizio responsive, mandando a capo le card
// - Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

let template = "";
const teamContainer = document.querySelector(".myrow");
for(let value of teamMembers) {
  template += `
    <div class="mycol text-white bg-black d-flex wrap">
      <img src="${value.img}" alt="${value.name}">
      <div class="ms-3 d-flex flex-column justify-content-center">
        <h4 class="fw-bold">${value.name}</h4>
        <p>${value.role}</p>
        <a class="text-info">${value.email}</a>
      </div>
    </div> 
  `;
}
teamContainer.innerHTML = template;

