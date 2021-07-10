# Algolia - User Profile Search Dashboard
The user profile search dashboard is created to demonstrate how a list of users could be retrieved and rendered in the UI using Algolia's product features.
The user profile search is one common action we all do in various platforms like social network, professional network, within organization's internal sites and many more.
In this dashboard, a user profile can be searched based on **first name**, **last name**, **city**, **state** and **country**.
The order of display in the dashbaord is based on the user registered age which keeps the recently registered users at the top.


## Import Data
1. Execute node `js/import.js` from the root directory of this project to import the contents of **contacts.json** into contacts index in Algolia account.
2. Output of this import will show the number of contacts imported if successful and error in case it's a failure.
3. Custom logic - Added app generated objectID and userId for each user
4. Custom logic - Derived birthday (DD-Month) from dob and added for each user


## About contacts.json
1. This json contains 5000 users with their basic profile info downloaded from https://randomuser.me/


## Configuration in Algolia's dashboard
Once the data was imported, the below steps were done,
1. Verify if the records are appearing under the index.
2. Set the searcheable attributes (firstname, lastname, city, state, country).
3. Set custom ranking based on the registered age (asc) and userId (desc)


## User Profile Search - html/css, app.js
1. Created a basic html with references to css (instantsearch, fontawesome) and js (instantsearch) over cdn in addition to custom css and js.
2. app.js contains algolia's instance creation, addition of widgets and starting the search.


## FUTURE USE
1. index.js and express is for future use in case this should be deployed as a node application.


## Comments to Algolia
1. Do you recommend the app to create the objectID? When i let algolia create it, all my records got duplicated when i did the import second time after which i deleted the index, created objectId within app before importing to index.
2. Initially my import kept failing with an error host not reachable. I'm not sure if it was my antivirus which was blocking. I then switched to an other laptop where i was able to import successfully. This is FYI.