const removeDuplicate = (arr) => {
    const uniqueArr = new Set(arr)
    return Array.from(uniqueArr)
}

console.log(removeDuplicate([1,1,1,2,3]))