

fetch("chocolatier.json")
    .then(cho => cho.json())
    .then(data => {
        // ma donnée dans data





        afficherproduits(data)
        afficherlisteBenifice(data)
        afficherclient(data)
    });
//role: fonction affiche dans la page web les produits  
//1 function
function afficherproduits(data) {
    console.log(data)
    // je recuber un par un
    let nomEntreprise = data.nomEntreprise;
    let slogan = data.slogan;
    let bouton = data.bouton;
    let listeBeneficesClients = data.listeBeneficesClientse;
    let produits = data.produits;
    let clients = data.clients;


    // affiche les produits en page

    produits.forEach(produit => {

        document.getElementById("sectionproduits").innerHTML +=


            `
            <!-- grouse div -->
            <div class="  flex align-center margin-top">
                <!-- div image -->

                <div class="">

                    <img src="${produit.imageUrl}"
                        alt="" class=" flex carte gap20"data-aos="fade-right">
                </div>
                
                <!-- div titre et présentation -->
                <div class=" carte"data-aos="fade-left">
                    <h5>${produit.titre}</h5>
                    <p>${produit.presentation}</p>
                    <!-- button -->
                    <a href="" class="btn">En Savoir plus</a>
                </div>



            </div>
       
        `





    });
}
//2 function
// afficher liste listeBeneficesClients
function afficherlisteBenifice(data) {


    data.listeBeneficesClients.forEach(benefice => {
        document.getElementById("sectionbenifice").innerHTML +=
            `
            <div class="w25 carte margin-top"  data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                <p>${benefice}</p>

            </div>

    `


    });


}
// fuction afficher avis client
//3 function

function afficherclient(data){

   
    data.clients.forEach(client => {
        document.getElementById("sectiontemoignage").innerHTML +=
        `
            <div class="carte w25 margin-top" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                <h5>${client.nom}</h5>
                <nav class="flex">
                    <ul>
                        <i class="ph-fill ph-star"></i>
                    </ul>
                    <ul>
                        <i class="ph-fill ph-star"></i>
                    </ul>
                    <ul><i class="ph-fill ph-star"></i>

                    </ul>
                    <ul>
                        <i class="ph-fill ph-star"></i>
                    </ul>
                    <ul>
                        <i class="ph-fill ph-star"></i>
                    </ul>

                </nav>
                <p>${client.typePrestation}</p>

                <p>${client.commentaire}</p>

            </div>
        `
        
    });
}


AOS.init();














