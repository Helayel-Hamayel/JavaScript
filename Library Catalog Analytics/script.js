const books = [
    {
        title: "The Hobbit",
        author: "Tolkien",
        year: 1937,
        rating: 4.7,
        genres: ["Fantasy"],
    },
    {
        title: "1984",
        author: "Orwell",
        year: 1949,
        rating: 4.8,
        genres: ["Dystopian", "Political Fiction"],
    },
    {
        title: "The Name of the Wind",
        author: "Rothfuss",
        year: 2007,
        rating: 4.5,
        genres: ["Fantasy", "Adventure"],
    },
    {
        title: "Brave New World",
        author: "Huxley",
        year: 1932,
        rating: 4.2,
        genres: ["Dystopian"],
    },
    {
        title: "Dune",
        author: "Herbert",
        year: 1965,
        rating: 4.6,
        genres: ["Science Fiction", "Adventure"],
    },
    {
        title: "Fahrenheit 451",
        author: "Bradbury",
        year: 1953,
        rating: 4.3,
        genres: ["Dystopian", "Science Fiction"],
    },
    {
        title: "The Road",
        author: "McCarthy",
        year: 2006,
        rating: 4.0,
        genres: ["Post-Apocalyptic"],
    },
    {
    title: "To Kill a Mockingbird",
    author: "Lee",
    year: 1960,
    rating: 4.9,
    genres: ["Classic", "Coming-of-Age"],
    },
];

// ========================[Task 1]========================
console.log("========================[Task 1]========================");

const bookTitles = [];

function getRecentBooks(books, afterYear) {

    for (let index = 0; index < books.length; index++) {
        if (afterYear <= books[index].year) {
           bookTitles.push(books[index].title +" ("+books[index].year+")" );
        }
        
    }
    console.log(`Titles in year ${afterYear} or after: `);
    for (let index = 0; index < bookTitles.length; index++) {
        console.log(bookTitles[index]);
    }

}

getRecentBooks(books, 1960);

// ========================[Task 2]========================
console.log("========================[Task 2]========================");

function getAverageRating(books){

    let sum = 0

    for (let index = 0; index < books.length; index++) {
        sum+=books[index].rating
    }

    const avg = (sum/books.length).toFixed(2);
    console.log("The Average rating of the entire collection is: " + avg)
}

getAverageRating(books)

// ========================[Task 3]========================
console.log("========================[Task 3]========================");
let sortedArray = []

function sortBooksBy(books, key, asc = true){

        if (key !== "year") {
            sortedArray = books.toSorted((a, b) => 
                asc ? a[key].localeCompare(b[key]) : 
                      b[key].localeCompare(a[key])
        )
        }
        else{
            sortedArray = books.toSorted((a, b) =>
                asc ? a[key] - b[key] : 
                      b[key] - a[key]
        ); 
        }


    console.log("Sorted Books by: ", key);
    
    for (let index = 0; index < sortedArray.length; index++) {
        console.log(sortedArray[index]);
    }
}

sortBooksBy(books, "year", true)

// ========================[Task 4]========================
console.log("========================[Task 4]========================");

let genreCount = {}

function countGenres(books){

    //genres: ["Fantasy", "Adventure"],
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books[i].genres.length; j++) {
            if (books[i].genres[j] in countGenres) {
                countGenres[books[i].genres[j]] += 1;
            } else {
                countGenres[books[i].genres[j]] = 1;
            }
        }
    }

    console.log("Sorted Generes:")
    for (let genre in countGenres) {
        console.log(`${genre} : ${countGenres[genre]}`);
    }
}

countGenres(books);

// ========================[Task 5]========================
console.log("========================[Task 5]========================");

let groupedByAuthoObj = {}

function groupByAuthor(books){

    
    for (let i = 0; i < books.length; i++) {
        if (books[i].author in groupedByAuthoObj) {
            groupedByAuthoObj[books[i].author].push(books[i])
        } else {
            groupedByAuthoObj[books[i].author] = [];
            groupedByAuthoObj[books[i].author].push(books[i])
        }
    }

    console.log("Group by Author:")
    for (let author in groupedByAuthoObj) {
        console.log(`${author} : `, groupedByAuthoObj[author]);
    }
}

groupByAuthor(books)

// ========================[Task 6]========================
console.log("========================[Task 6]========================");

function hasHighlyRated(books, threshold){

    console.log("Books with rating (at minimum): ", threshold.toFixed(1));
    
    for (let index = 0; index < books.length; index++) {
        if (threshold <= books[index].rating) {
            // console.log(books[index]);
            console.log(books[index].title +" - ("+ books[index].rating+")");
        }
    }
}

hasHighlyRated(books, 4.0);

// ========================[Task 7]========================
console.log("========================[Task 7]========================");

function allBeforeYear(books, beforeYear){
    for (let index = 0; index < books.length; index++) {
        if (books[index].year <= beforeYear) {
           console.log(books[index].title +" ("+books[index].year+")" );
        }
    }
}

allBeforeYear(books, 2000)

// ========================[Task 8]========================
console.log("========================[Task 8]========================");


function findByTitle(books, title){
    for (let index = 0; index < books.length; index++) {
        if (books[index].title === title) {
           console.log(books[index].title);
           return
        }
    }
    console.log("Note: no result found from query")
}

findByTitle(books, "The Hobbit")
findByTitle(books, "hob")
findByTitle(books, "hobbit")

// ========================[BONUS TASK 1]========================
console.log("========================[BONUS TASK 1]========================");

function designateClassicWorks(books){
    for (let index = 0; index < books.length; index++) {
        books[index]["isClassic"] = false
        if (books[index].year < 1950) {
           books[index]["isClassic"] = true
        }
        console.log( books[index]);
    }
}

designateClassicWorks(books)

// ========================[BONUS TASK 2]========================
console.log("========================[BONUS TASK 2]========================");


function searchByGeneres(books, genreQurery){

    let queryNotFound = 1
    let matchedGeneres = []

    console.log("\nSearching books with genere of: ",genreQurery)
    for (let index = 0; index < books.length; index++) {
        if (books[index].genres.includes(genreQurery)) {
           matchedGeneres.push(books[index].title);
           queryNotFound = 0
        }
    }

    if (queryNotFound) {
        console.log("Note: no result found from query")
        return
    }

    matchedGeneres.sort()
    console.log(matchedGeneres);
    
}

searchByGeneres(books, "Dystopian")
searchByGeneres(books, "Science Fiction")

// ========================[BONUS TASK 3]========================
console.log("========================[BONUS TASK 3]========================");


function searchByKeyword(books, keyword){
    console.log("\nYou searched for: "+keyword)
    for (let index = 0; index < books.length; index++) {
        if (books[index].title.toLowerCase().includes(keyword.toLowerCase())) {
           console.log("The result: "+books[index].title);
           return
        }
    }
    console.log("Note: no result found from query")
}

searchByKeyword(books, "Hobbit")
searchByKeyword(books, "hob")