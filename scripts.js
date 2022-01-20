//test
console.clear()
let year = new Date().getFullYear();
console.log(year)

//arrays
const numbers = [1,2,3,4,5,6,7,8,9]
const numbersCopy = [...numbers]
const numbersCopy2 = [...numbers,10]
const names = ['JACK', 'FAAatin', 'Slim', 'Bam']

//Mutations methods that changes the array
//Immutable methods don't change the array

//Mutated 
let numbersMutated = [...numbers]
numbersMutated.reverse()
//console.log('Numbers Reversed - mutated', numbersMutated)


//splice is mutable 
console.log(numbersCopy)
numbersCopy.splice(3,2)
console.log(numbersCopy)

const namesII = [
    ...names.slice(0,1),
    'Rat',
    ...names.slice(1)
]

const namesI = [
    ...namesII.slice(0,1),
    ...namesII.slice(2)
]

const comments = [
    { text: 'comments goes here 0', id: 120 },
    { text: 'comments goes here 1', id: 121 },
    { text: 'comments goes here 2', id: 122 },
    { text: 'comments goes here 3', id: 123 },
]
const commentIndex = comments.findIndex(item => item.text === 'comments goes here 1')
console.log('comment index',commentIndex)

const newCommentWithout1 = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex+1)
]

//console.log(namesII, namesI, 'comments', newCommentWithout1)

function deleteComment(comment, commentsArray) {
    const deletedCommentIndex = commentsArray.findIndex(item => item.text === comment)
    console.log('deletedCommentIndex',deletedCommentIndex)

    const newCommentWithoutDeleted = [
        ...commentsArray.slice(0, deletedCommentIndex),
        ...commentsArray.slice(deletedCommentIndex + 1)
    ]

    return newCommentWithoutDeleted
}
const deletedItem = deleteComment('comments goes here 2',comments)
console.log('deleteCommentsFromArray',deletedItem )

const spreadArray = [...'sk']
console.log('spreadArray >>', spreadArray)

const iterableArray =  Array.from({length: 5}, () => {
    return 'sura'
})
console.log('IterableArray >>', iterableArray)

//Create a range array

function createRangeArray(start,end) {
    const rangedArray = Array.from({length: end - start + 1}, function(item, index){
        return index + start
    })
    return rangedArray
}

console.log('CreateRangeArray', createRangeArray(10, 15))

//Keys and Values
const listOfToys = {
    shark: 1,
    dolphin: 2,
    fish: 3,
    starfish: 4,
    jellyfish: 5
}
//console.log('type of', typeof listOfToys)
//console.log('entries',Object.entries(listOfToys))
//console.log('keys', Object.keys(listOfToys))
//console.log('values', Object.values(listOfToys))

Object.entries(listOfToys).forEach(([key,value]) => {
    //forEach(entry)  or destructure it at the top
    // const key = entry[0]
    // const value = entry[1]
    console.log(key, value)
})

const food = 'burger, cheese, yum, mew'

const numbersReducedArray = [1,3,4, 2]

const accReduced = (totals, currentNumber ) => {
    return totals ?  totals * currentNumber : currentNumber
}

const totalReduced = numbersReducedArray.reduce(accReduced, 0)
console.log('totalReduced', totalReduced, `${totalReduced}` )