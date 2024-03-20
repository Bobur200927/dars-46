// import {lang} from './params.js'
// import {$} from './Elems.js'

// console.log($('h1'));
// let l = 'en'
// addEventListener('load', ()=>{
//     console.log("Yuklandi");
// })

// document.querySelector('h1').innerText = lang[l].text


// GRUPPALAR
// 1. KUTUBHONALAR
// 2. O'zgaruvchilar
// 3. Functions
// 4. Skriptlar

// JQUERY
// SELECTOR

let tb = document.querySelector('tbody')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()).then(data => render(data))


function render(data) {
    data.map(p => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.title}</td>
        <td>${p.body}</td>
        `
        tb.append(tr)
    })
    $('#myTable').DataTable({
        language: {
            processing: "Traitement en cours...",
            search: "Qidirish:",
            lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
            info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
            infoEmpty: "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
            infoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
            infoPostFix: "",
            loadingRecords: "Chargement en cours...",
            zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
            emptyTable: "Aucune donnée disponible dans le tableau",
            paginate: {
                first: "Premier",
                previous: "Pr&eacute;c&eacute;dent",
                next: "Suivant",
                last: "Dernier"
            },
            aria: {
                sortAscending: ": activer pour trier la colonne par ordre croissant",
                sortDescending: ": activer pour trier la colonne par ordre décroissant"
            }
        }
    })
}

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

  var swiper2 = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
