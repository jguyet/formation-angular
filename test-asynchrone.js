

// CAS asynchrone
(async () => {
    try {
        const responsePromise = fetch('http://angular19.duckdns.org:8081/search_query');

        const response = await responsePromise;
        const content = await response.text();
        console.log(content);
    } catch (e) {
        console.log('ssss', e);
    }
})();

// CAS synchrone
// (() => {
//     const responsePromise = fetch('http://angular19.duckdns.org:8081');

//     responsePromise.then((response) => {
//         response.json().then((jsonData) => {
//             jeTraiteLadonner(jsonData);
//             console.log(jsonData);
//         })
//     }).catch((e) => {
//         console.log(e);
//     });
// })();