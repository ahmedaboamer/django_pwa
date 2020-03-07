// fetch JSON response from http://127.0.0.1:8000/getdata
fetch('http://127.0.0.1:8000/getdata').then(function (response) {
    return response.json();
}).then(function (jsondata) {
    console.log(jsondata);
});

// open new database connection to IndexedDB to store data
// We use pk field of JSON as a key in IndexedDB
var dbPromise = idb.open('feeds-db', 1, function (upgradeDb) {
    upgradeDb.createObjectStore('feeds', { keyPath: 'pk' });
});
