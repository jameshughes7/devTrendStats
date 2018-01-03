# Dev Trends Statistics App


Project outline
---
A simple front end web app displaying software developer trends and how the differ in the winter months(**Oct-Dec**) compared to the rest of the year(**Jan-Sep**). The data was obtained from the Github API <a href="https://developer.github.com/v3/​​">GitHub API</a>
This project was both challenging and equally enjoyable.
I learned a lot about how to deal with Web API's and how to gather,
extract and collate data. I also learned about many helpful **NodeJs** libraries which will come in useful in the future.


Goals
---
This project had two main goals:
1. Show the trends that developers displayed over the winter months and compare these trends with the rest of the year.
2. Show how these trends differed to other developers over the same periods of time.

When I started this project, I had 2 many thoughts regarding the direction I should take to tackle it.
- Create a web crawler/scraper to gather the data
- Obtain the data needed by accessing the GitHub API


My Approach
---
Having done some research on both options, I realised that the 2nd option was the better choice. Creating a crawler would have been overkill.

2 Main main features of this app would allow us to compare the differing developer trends
1. Compare the profiles of a select group of gitHub Users and compare their dev trends.
2. Compare the various GitHub users that have been collaborating on one of the top trending repositories found here: <a href="https://github.com/trending?since=monthly">Top monthly trending repositories</a>.
A repo such as this would give us some invaluable data: <a href="https://github.com/parcel-bundler/parcel">Parcel</a>

For the above mentioned features, the following parameters could be analysed to compare the various GitHub Users and their trends from **Jan-Sep** compared to **Oct-Dec**
- Most used and least used language
- Number of followers
- Number of collaborators
- Number of commits
- Number of Stars
- Number of Contributors


To run
---
```
- git clone git@github.com:jameshughes7/devTrendStats.git
- cd devTrendStats
- nodemon app.js
- http://localhost:3000
```


Technology
---
```
- JavaScript
- Node
```


Trouble shooting
---
Knowing how to obtain the Access token was one of the big challenges I faced. Reading through the GitHubAPI docs felt daunting at times as there was so much information. This was the first time I had needed to provide credentials in exchange for a security token. But having done it now, I look forward to more OAuth challenges in the future.

The time aspect is the other big challenge for this project. It's good to gather data at a set point in time, but it to really complete this project, I will need to extract data from the GitHub API over a period of time(e.g. comparing data from the first 9 months of the year and comparing that with data from the last 3 months of the year). This is currently a work in progress which I look forward to cracking.


Things to Improve
---
__Testing__ __:(__ As much of this project has been an adventure of exploration and discovery, testing was not the priority. As a matter of priority, I will be testing the app using the npm libraries: **supertest**, **mocha** and **should**.
