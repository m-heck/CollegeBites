
# CollegeBites

## Problem
People visiting college towns often don’t know much about its local businesses, especially if this is a college town they are not familiar with. We will be addressing this problem by creating a website that allows people to choose the college they are visiting and receive information (such as the address, rating, and hours) about the top restaurants, museums, and other attractions based on the user’s preferences.

## Motivation
Colleges bring in many new people for their conferences, sports, and other events throughout the year. However, most of the time, these visitors are clueless about what local businesses are worthwhile to visit. Websites like Yelp and Google are possible solutions, however we wanted to create a website that omits unnecessary information and caters to the college town crowd to further simplify the process. For all the college sports enthusiasts, professional conference goers, and anyone else who finds themselves traveling from college town to college town, this website is for you!

## Features
We present an easy-to-use and visually appealing website available to the public that recommends relevant restaurants based on the user’s sorting criteria. Once the user selects the college they are visiting, they can sort restaurants in the area based on popularity (review count) or on number of stars. The user can also choose how many results are displayed on the page (5, 10, 50, or 100 results). The last feature lets the user choose a sorting method (merge sort or quick sort). Internally, the execution time of the sort is displayed to the console to allow for easy comparison between the two algorithms. The color scheme of the page is also adjusted to match the college the user selected.

## Data Used
For our project, we used the Yelp dataset, which can be found at the following link: https://www.yelp.com/dataset/documentation/main. The Yelp dataset consists of multiple json files. The files that we’ll be focused on in our project are businesses.json and photo.json. The business.json file contains 150,346 rows and has columns including business_id, name, address, stars, and review_count. The photo.json file contains 200,100 rows and has columns including business_id, photo_id, caption, and label of the picture. Included in the dataset is also a directory of each image file, which can be identified by the photo_id. Specifically, for each business, we are interested in the star rating of that business, the review count, the address and the hours. We also display the matching photo in the yelp dataset that corresponds to the current business’ business_id.

## Tools Used
We used JavaScript, HTML, and CSS to create the website. HTML and CSS made up the frontend, while JavaScript was used both to implement the merge sort and quick sort algorithms and to make the website dynamic based on the user’s search criteria. To share our code, we used Git, GitHub, and the Git Large File Storage tool. To host our website, we used GitHub Pages. 

## Algorithms Implemented and Additional Data Structures
The two algorithms we will use to represent the data are quick sort and merge sort. Both of the algorithms can sort based on the review_count or based on the rating. The algorithms were implemented using JavaScript and can be found in script.js file. 

We used JavaScript arrays to hold each JSON object for ease of access. Arrays held the bulk of our actual data and were also used in the actual implementation of quick and merge sort. In order to filter the relevant data points by city, we used a basic linear search algorithm on our data array.

## Image Credits
- 5.0 stars: https://commons.wikimedia.org/wiki/File:Star_rating_5_of_5.png
- 4.5 stars: https://commons.wikimedia.org/wiki/File:4.5_stars.svg
- 4.0 stars: https://commons.wikimedia.org/wiki/File:Star_rating_4_of_5.png
- 3.5 stars: https://commons.wikimedia.org/wiki/File:3.5_stars.svg
- 3.0 stars: https://commons.wikimedia.org/wiki/File:3_stars.svg
- 2.5 stars: https://commons.wikimedia.org/wiki/File:2.5_stars.svg
- 2.0 stars: https://commons.wikimedia.org/wiki/File:Star_rating_2_of_5.png
- 1.5 stars: https://commons.wikimedia.org/wiki/File:1.5_stars.svg
- 1.0 stars: https://commons.wikimedia.org/wiki/File:1_stars.svg
- Images Used for each attraction are found on yelp.
