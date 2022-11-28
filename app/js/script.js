// ============================ MAIN ============================

console.log(data);
console.log(filterData("Nashville"));
mergeSort(data, "Rating");

// ============================ WEBSITE FUNCTIONALITY ============================

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

// ============================ ALGORITHM 1 ============================

// Credit: Logic behind merge sort from class slides "Sorting" slides #89, 90
// MERGE SORT
// Input: an array to be sorted, the method by which to sort the items (rankBy)
//      rankBy can be one of two strings, "Rating" or "Popularity"
// Output: a sorted array of objects
function mergeSort(array, rankBy) {
    mergeSortHelper(array, 0, array.length - 1, rankBy);
}

// Credit: Logic behind merge sort from class slides "Sorting" slides #89, 90
// MERGE SORT HELPER
function mergeSortHelper(array, left, right, rankBy) {
    console.log("Testing");
}

// MERGE
function merge(array, left, mid, right) {

}

// ============================ ALGORITHM 2 ============================

// QUICK SORT
// Input: an array to be sorted, the method by which to sort the items (rankBy)
//      rankBy can be one of two strings, "Rating" or "Popularity"
// Output: a sorted array of objects

function quickSort(array, rankBy) {

}