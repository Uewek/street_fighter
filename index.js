const API_URL = 'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
    headers: {
        authorization: "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"
    }
};
const rootElement = document.getElementById('root');
const responsePromise = fetch(API_URL, SECURITY_HEADERS);
rootElement.innerText = 'Loading...';

fetch(API_URL, SECURITY_HEADERS)
    responsePromise
    .then(
        response => response.json(),
        error => console.warn(error)
    )
    // .then(response => response.json())
    // .then(file => {
    //     const fighters = JSON.parse(atob(file.content));
    //     const names = fighters.map(it => it.name);
    //     const namesStr = names.join('\n');
    //     rootElement.innerText = namesStr;
    // });


