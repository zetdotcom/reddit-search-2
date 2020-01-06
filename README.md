# Reddit Search app

### Search for reddits, you can specify sort option and number of items to fetch

### [DEMO:](http://zetdotcom.github.io/reddit-search-2)

### to run locally:

`yarn install`
`yarn start`

- Project started with creat-react-app as it is quick and quite good be default. If there would be some special requirements for customisation that CRA don't allow it can always be ejected, although before ejecting I would check if there are some packages that would allow desired customisation. One of them is rewire.

- Decided to go with containers components folder structure 'folder-by-type', i.e. reducers, actions etc. However I think grouping the folders by feature would also work but I have not used it before and didn't have enough time to get more insight into it.

- Implemented redux with app scaling in mind. Otherwise redux wouldn't be necessary for such a small app. If I would have more time I would look into [redux-toolkit:](https://redux-toolkit.js.org/) as it looks quite good and provides some useful functions.

- Chosen SASS and BEM syntax for styling as it is simple and powerful, although may lead to long class names. Alternative could be styled-components which I also like, but SASS seemed quicker.

- Because of time limits I have used material-ui components. Depending on business requirements creating own ui components library would make sense to ensure consistent feel across multiple apps.

- For testing I have used react-teseting-library which I now prefer over enzyme. And for e2e I have used cypress, which was my first time using it but it looks and works pretty good. If I would have more time I would written more tests.
