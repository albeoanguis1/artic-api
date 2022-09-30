async function clickedEvent(my_id){
    // let id = document.getElementsByTagName('img')[img_index].attribute[2].value
    let id = document.getElementById(my_id).alt
    console.log(my_id)
    let headers = new Headers([
        ['Content-Type', 'applications/json'],
        ['Accept', 'application/json'],
    ]);


    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();
    
    // Overwrite Title in Modal
    let title = await response.data.title
    console.log(title)
    console.log(response)

    let my_title = document.getElementById('staticBackdropLabel')
    my_title.innerHTML = title
    console.log(my_title)
}


function doSomethingPlease(id, event){
    switch(id){
        case 'fig1':{//van Gogh
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
    }
}