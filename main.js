"use: strict";

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Array di oggetti
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carollt",
        role: "Chief Editor",
        image: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "../img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "../img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "../img/barbara-ramos-graphic-designer.jpg"
    }

];

for(let i = 0; i < team.length; i++) {
    const employee = team[i];

    for(let key in employee) {
        console.log(employee[key]);
    }
}

const teamContainer = document.querySelector('.team');

for(let i = 0; i < team.length; i++) {
    const employee = team[i];

    let listItem = `
    <li class="employee">
        <div class="employee-avatar">
            <img src="img/${employee.avatar}">
        </div>`;
        if( employee.name ) {
            listItem += `<h3 class="employee-name">${employee.name}</h3>`
        }
    listItem += `<p class="employee-role">${employee.role}</p>
    </li>`;

    teamContainer.innerHTML += listItem;
}