const USERNAMES = [
    "alice",
    "bob",
    "charlie",
    "dave",
    "eve",
    "frank",
    "grace",
    "heidi",
    "ivan",
    "judy",
    "karen",
    "leo",
    "mike",
    "nancy",
    "oliver"
];

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

// JS linear search function:
// - indexOf / lastIndexOf
// - find / findIndex
// - includes

function linearSearch(array, value) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === value) {
            return index;
        }
    }

    return -1;
}

linearSearch([1, 2, 3, 5, 8, 9], 9)

Array.prototype.awesomeIndexOf = function (cb) {
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index], index, this) === true) {
            return index;
        }
    }

    return -1;
}

USERNAMES.awesomeIndexOf((el, i, arr) => {
    return el === "nancy";
});