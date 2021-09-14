
// selection des elements html

const filtres = document.querySelectorAll('.btnf');
const articles = document.querySelectorAll('.store-item');




// fonction pour afficher les articles en fonction du filtre (bouton)
filtres.forEach((filtre)=>{


    filtre.addEventListener('click',(e)=>{

        e.preventDefault()
        const filter = e.target.dataset.filter

        articles.forEach((item)=> {
            if(filter === "all"){

            item.style.display = 'block'

             } else {

            if(item.classList.contains(filter)){
            item.style.display = "block"

            } else {

                item.style.display = "none"
            }

        }
})
})
})




const research = document.querySelector('#search-item');


// recherche par la barre de recherche manuelle 

research.addEventListener('keyup', (e) => {

        const searchfilter = e.target.value.toLowerCase().trim();

             articles.forEach((article) =>{

            if(article.textContent.includes(searchfilter)){

                article.style.display = "block";

            } else {

                article.style.display ="none";
                
            }
        })


})






