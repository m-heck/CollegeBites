console.log(data);
console.log(filterData("Nashville"));

// FILTER DATA
// Input: a string of the name of the city you would like to filter for
// Output: an array of objects for the respective city
function filterData(searchCity) {
    let result = [];
    data.forEach(element => {
        if (element["city"] == searchCity) {
            result.push(element);
        }
    });
    return result;
}

// MERGE SORT
// Input: an array to be sorted, the method by which to sort the items (rankBy)
//      rankBy can be one of two strings, "Rating" or "Popularity"
// Output: a sorted array of objects
function mergeSort(array, rankBy) {

}

// QUICK SORT
// Input: an array to be sorted, the method by which to sort the items (rankBy)
//      rankBy can be one of two strings, "Rating" or "Popularity"
// Output: a sorted array of objects

function quickSort(array, rankBy) {

}