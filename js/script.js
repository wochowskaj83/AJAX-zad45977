console.log('zad45977');


let preloading = false;

const showPreloader = () => {

    let preloader = document.getElementById('preloader');
    console.log('showPreloader()');
    preloader.style.display = 'block';
    preloading = true;
}

const hidePreloader = () => {

    let preloader = document.getElementById('preloader');
    console.log('hidePreloader()');
    preloader.style.display = 'none';
    preloading = false;
}

const getData = () => {

   
    if (!preloading) {
        
        showPreloader();

        fetch(`https://akademia108.pl/api/ajax/get-users.php`)
            .then(res => res.json())
             .then(data => {

                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.website}<br /> ------------`;


                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);

                 }

                 hidePreloader();

                console.log(data);
             })
             .catch(error => {
            console.log(error);
            });
    }
}
        

    
    
const scrollToEndOfPage = () => {

    let d = document.documentElement;

    /* height of an element's content including content not visible on the screen
     */
    let scrollHeight = d.scrollHeight;

    /* number of pixels that an element's content is scrolled vertically */
    let scrollTop = d.scrollTop;

    /* inner height of an element in pixels */
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollHeight: ${scrollTop}`);
    console.log(`scrollHeight: ${clientHeight}`);
    console.log(`scrollHeight: ==================`);

    if (sumScrollTopClientHeight >= scrollHeight) {
        console.log(`scrolled to the end of page`);

        getData();
    }

}

window.addEventListener('scroll', scrollToEndOfPage);
/*ustawienie nasłuch zdarzenia scroll - funkcja obsługująca scroll to scrollToEndOfPage  */