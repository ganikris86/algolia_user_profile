const algoliasearch = require('algoliasearch');
const contacts = require('../data/contacts.json');

//** Algolia Application Id and API key - TODO: Maintain the key in a config */
const client = algoliasearch('X2Z52DNZIS', '71725011f0add9caad99c10e6aaf2872');
const index = client.initIndex('contacts');

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//** Add userId to contacts */
contacts.map((x, idx) => {
    x.objectID = 10000+idx;
    x.userId = idx+1;
    let dob = new Date(x.dob.date);
    x.birthday = `${dob.getDate()}-${monthNames[dob.getMonth()]}`;
    return x;
});

//** Import data to algolia index */
index.saveObjects(contacts, { autoGenerateObjectIDIfNotExist: true })
.then(({objectIDs}) => console.log(objectIDs.length + " contacts imported..."))
.catch(err => console.log("Error while import - ", err));
