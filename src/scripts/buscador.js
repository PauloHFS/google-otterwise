import { getSearch } from './googleAPI';

const searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', async () => {
  const searchField = document.querySelector('#searchField');

  const query = searchField.value;

  const data = await getSearch(query);

  const { results } = await data.json();

  buildResults(results);
});

const buildResults = results => {
  const main = document.querySelector('main');

  main.removeChild(document.querySelector('.results'));

  const resultsContainer = document.createElement('section');
  resultsContainer.className = 'results';

  main.appendChild(resultsContainer);

  results.forEach(({ link, title, description }) => {
    const result = document.createElement('div');
    result.className = 'result';

    /* HEADER START */
    const header = document.createElement('div');
    header.className = 'result-header';

    const header_link = document.createElement('a');
    header_link.className = 'result-header-link';
    header_link.href = link;
    header_link.appendChild(document.createTextNode(link));

    header.appendChild(header_link);

    const header_title = document.createElement('h3');
    header_title.className = 'result-header-title';
    const header_title_link = document.createElement('a');
    header_title_link.className = 'result-header-title-link';
    header_title_link.href = link;
    header_title_link.appendChild(document.createTextNode(title));

    header_title.appendChild(header_title_link);
    header.appendChild(header_title);

    result.appendChild(header);
    /* HEADER END */

    /* DESCRIPTION START */
    const desc = document.createElement('div');
    desc.className = 'result-description';

    const descText = document.createElement('p');
    descText.className = 'result-description-text';
    descText.appendChild(document.createTextNode(description));

    desc.appendChild(descText);

    result.appendChild(desc);
    /* DESCRIPTION END */

    document.querySelector('.results').appendChild(result);
  });
};
