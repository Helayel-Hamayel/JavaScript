const users = [
{ id: 1, username: "dania", followers: 1200, verified: true },
{ id: 2, username: "omar", followers: 350, verified: false },
{ id: 3, username: "luna", followers: 2400, verified: true },
{ id: 4, username: "zain", followers: 90, verified: false },
{ id: 5, username: "maya", followers: 800, verified: true },
];

const posts = [
{ 
id: 1,
userId: 1,
title: "Why JavaScript is Weird",
content: "JavaScript has strange but interesting behavior.",
likes: 1500,
category: "Programming",
},
{
id: 2,
userId: 3,
title: "Best Gaming Setup",
content: "Today I will show my gaming room.",
likes: 2200,
category: "Gaming",
},
{
id: 3,
userId: 1,
title: "React Tips",
content: "Use components to organize your UI.",
likes: 900,
category: "Programming",
},
{
id: 4,
userId: 5,
title: "Morning Routine",
content: "Small habits can change your day.",
likes: 700,
category: "Lifestyle",
},
];

// ========================[Task 1]========================
console.log("========================[Task 1]========================");
function createUserCards(cards) {
    console.log("Printing User Cards:");
    
    cards.map((item) => {
      console.log( `@${item.username} - ${item.followers} followers - `,
        `${item.followers > 500 ? "Active User" : "New User"}`,
      );
    })
}

createUserCards(users)

// ========================[Task 2]========================
console.log("========================[Task 2]========================");

function filterViralPosts(posts) {
    console.log("Filtering for Viral Posts");
    
    return posts.filter((item) => item.likes > 1000)
}

const viralPostsArray = filterViralPosts(posts)
console.log(viralPostsArray);

// ========================[Task 3]========================
console.log("========================[Task 3]========================");
console.log("The most popular user is:");
function findTheMostPopularUser(users) {

    const sortedUsers = users.sort((a, b) => b.followers - a.followers)

    console.log(sortedUsers[0]);
}

findTheMostPopularUser(users)

// ========================[Task 4]========================
console.log("========================[Task 4]========================");
console.log("List of Inactive Users:");

function filterInactivity(users , posts) {

    const activeUserIds = posts.map(post => post.userId);
    const inactiveUsers = users.filter(user => !activeUserIds.includes(user.id));

    console.log(inactiveUsers);
}

filterInactivity(users, posts) 

// ========================[Task 5]========================
console.log("========================[Task 5]========================");

function sumAllLikes(posts) {
    const totalLikes = posts.reduce(
        (sum, item) => sum + item.likes,
        0,
    );
    console.log("The total Likes of all posts is: ", totalLikes);
}

sumAllLikes(posts)

// ========================[Task 6]========================
console.log("========================[Task 6]========================");

function checkForVerified(users) {
    const hasVerifiedUser = users.some(user => user.verified);
    console.log("Has at least one verfied user?:",hasVerifiedUser); 
}

checkForVerified(users)

// ========================[Task 7]========================
console.log("========================[Task 7]========================");

function platformQuality(posts) {

    const isPlatformQualityGood = posts.every(post => post.title && post.content);
    console.log("is Platform Quality Good?:",isPlatformQualityGood); 
}

platformQuality(posts);

// ========================[Task 8]========================
console.log("========================[Task 8]========================");

function uppercaseTitles(posts) {
    console.log("Uppercase post titles:");
    const upperCaseArray = posts.map(post => post.title.toUpperCase())
    console.log(upperCaseArray);
}

uppercaseTitles(posts)

// ========================[Task 9]========================
console.log("========================[Task 9]========================");

function filterCatagory(posts, catagory = "gaming") {
    console.log(`Filtering posts with (${catagory}) catagory:`);
    const filteredCatagory = posts.filter((item) => item.category.toLowerCase() === catagory.toLowerCase())
    console.log(filteredCatagory);
}

filterCatagory(posts, "gaming")

// ========================[Task 10]========================
console.log("========================[Task 10]========================");

console.log("Sorted users according to followers count:");
function sortUsers(users) {

    const sortedUsers = users.sort((a, b) => b.followers - a.followers)
    console.log(sortedUsers);
}

sortUsers(users)

// ========================[Task 11]========================
console.log("========================[Task 11]========================");

function findUserByUsername(users, usernameToFind) {
    console.log(`Searching for user: @${usernameToFind}`);
    
    // Find the first user object where the username matches
    const foundUser = users.find(user => user.username.toLowerCase() === usernameToFind.toLowerCase());
    console.log(foundUser);

}

findUserByUsername(users, "dania");

// ========================[Task 12]========================
console.log("========================[Task 12]========================");

function platformStatstics() {
    const totLik = posts.reduce((sum, item) => sum + item.likes,0,)
    console.log("============ PLATFORM STATISTICS ============");
    console.log("Total Users: ", users.length);
    console.log("Total Posts: ", posts.length);
    console.log("Total Likes: ", totLik);
    console.log("Average Likes per post:", totLik/posts.length, "Likes per Post");
    const catItemCount = posts.reduce((totals, item) => {
    if (!totals[item.category]) {
      totals[item.category] = 0;
    }
    totals[item.category] += 1;
    return totals;
    }, {});

    const [highestCat, highestCount] = Object.entries(catItemCount)
        .sort((a, b) => b[1] - a[1])[0];

    console.log("Category Counts:", catItemCount);
    console.log(`Highest Category: "${highestCat}" with ${highestCount} posts.`);
    
}

platformStatstics()