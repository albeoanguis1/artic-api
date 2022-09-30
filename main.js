async function clickedEvent(img_index){
    let id = document.getElementsByTagName('img')[img_index].attributes[2].value
    let headers = new Headers([
        ['Content-Type', 'applications/json'],
        ['Accept', 'application/json'],
    ]);

    apiData = function(data){
        let title = data.title[0];
        
        document.querySelector(".modal-title").innerText = title;
    }

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)


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