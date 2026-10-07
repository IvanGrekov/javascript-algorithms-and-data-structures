// - Binary search is much faster than linear search
// - Rather than eliminating 1 element at a time, it eliminates half of the remaining elements with each step
// - Requires the array to be sorted before performing the search

const US_STATES = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "United States Virgin Islands",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];

// console.log(US_STATES[1].localeCompare(US_STATES[1]));

function binarySearchState(state) {
    let start = 0;
    let end = US_STATES.length - 1;

    while (start <= end) {
        const middle = Math.floor((end + start) / 2);
        const middleEl = US_STATES[middle];
        const compare = middleEl.localeCompare(state);

        if (compare === 0) {
            return middle;
        } else if (compare === 1) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}

// console.log(binarySearchState("Indiana"));

// Write a function called binarySearch that accept sortedArray and value (only number)

function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.floor((end + start) / 2);
        const middleEl = array[middle];

        if (middleEl === value) return middle;
        else if (middleEl > value) end = middle - 1;
        else start = middle + 1;
    }

    return -1;
}