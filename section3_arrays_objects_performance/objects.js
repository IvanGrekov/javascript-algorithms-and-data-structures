let instructor = {
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
};

// Insertion – O(1)
instructor.name = 'Kely';

// Updating - O(1)
instructor.name = 'Kelly';

// Removal - O(1)
delete instructor.favoriteNumbers;

// Access - O(1)
instructor.isInstructor;
instructor.hasOwnProperty('favoriteNumbers');

// Searching - O(n)
Object.keys(instructor).includes('favoriteNumbers');
Object.values(instructor).includes('Kelly');
Object.entries(instructor).some(([key, value]) => key === "name" && value === "Kelly");
