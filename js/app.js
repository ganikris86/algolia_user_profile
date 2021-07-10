//** TODO - Maintain the key in a config */
const searchClient = algoliasearch('X2Z52DNZIS', 'e84bf6a8f194c5582959723f8dff8384');

//** Create instantSearch instance for comms between app and Algolia */
const search = instantsearch({
  searchClient,
  indexName: 'contacts'
});

//** Add widgets - searchbox, stats, hits, pagination */
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: 'Search for users...',
    autofocus: true,
    searchAsYouType: true
  }),

  instantsearch.widgets.stats({
    container: '#stats',
  }),

  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: `
        <div class="row clearfix">
          <div class="span_1 column">
            <img id="thumbnail" alt={{name.first}} src={{picture.large}} />
          </div>
          <div class="span_4 column">
            <p>
              <span id="firstName">{{ name.first}}</span>
              <span id="lastName">{{ name.last}}</span>
            <p>
            <p><i class="fas fa-birthday-cake"></i>&nbsp;&nbsp;{{ birthday }}</p>
          </div>
          <div class="span_4 column">
            <p><span>{{ location.city }},&nbsp;{{ location.state }}</span></p>
            <p><span>{{ location.country }}</span></p>            
          </div>
          <div class="span_4 column">
            <p><i class="fas fa-envelope-square"></i>&nbsp;&nbsp;{{ email }}</p>
            <p><i class="fas fa-phone"></i>&nbsp;&nbsp;{{ phone }}</p>
          </div>
        </div>
      `,
      empty: ''
    }
  }),

  instantsearch.widgets.pagination({
    container: "#pagination",
  })
]);

//** Start the search */
search.start();
