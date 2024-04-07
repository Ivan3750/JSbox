    /* TASK 1 */

users = [
    {
        name: "Ivan",
        balance: 50,
        friends: "John",
        numFriend: 1,
        skills: "programing"
    },
    {
        name: "John",
        balance: 780,
        friends: "Ivan",
        numFriend: 1,
        skills: "driving"
    },
    {
        name: "Peter",
        balance: 550,
        friends: "",
        numFriend: 0,
        skills: "painting"
    }
]


let balanceTotal = users.reduce((total, user)=>{
    return total + user.balance
}, 0)


console.log(balanceTotal)

/* TASK 2 */


let friendNameToFind = "John";

let FindFriend = users
.filter(user => user.friends === friendNameToFind)
    .map(user => user.name);

console.log(FindFriend);


/* TASK 3 */


let sortFriends = users.sort((a,b)=>{
    return b.numFriend - a.numFriend
})

console.log(sortFriends)


/* TASK 4 */

let sortSkills = users.sort((a,b)=>{
    console.log(a.skills)
    return b.skills.localeCompare(a.skills);
})

console.log(sortSkills)