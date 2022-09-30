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

    // Assigning api data to variables
    let title = await response.data.title
    let date_pub = await response.data.date_start
    let artist = await response.data.artist_display
    let history = await response.data.publication_history
    console.log(title)
    console.log(date_pub)
    console.log(response)

    // Displays Elements in Modal
    //Displays Title + Date published
    let my_title = document.getElementById('staticBackdropLabel')
    my_title.innerHTML = title + ", " + date_pub
    //Displaying art information in body of Modal
    let my_artist = document.getElementById('IAmArtist')
    my_artist.innerHTML = artist
    let my_desc = document.getElementById('IAmDesc')
    my_desc.innerHTML = history
    console.log(my_title)
}