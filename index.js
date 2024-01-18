const myUrl = `https://api.pexels.com/v1/search?query=${searchKeyword}`;

function LoadImages(searchKeyword) {
    fetch(myUrl, {
        method: "GET",
        headers: {
            Authorization: "tQNOSO1F0bAKNf9PFQxkOQx1kJN1ZU54uLG7YhtDF8Lo9xVugPxKrESI",
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {

        console.log(data);
    })
    .catch(error => {

        console.error("Errore durante la richiesta API:", error);
    });}