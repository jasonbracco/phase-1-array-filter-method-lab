function findMatching(array, string){
    return array.filter(function(driver){
        return driver.toUpperCase() === string.toUpperCase() //equating the case of the string in the array to case of the arguement value
    })
}

function fuzzyMatch(array, string){ //Need to compare the characters of a provided string
    return array.filter(function(driver){ 
        return driver.toLowerCase().slice(0, string.length) === string.toLowerCase() //slicing the inputs of driver to the length of the given string, and making it case unspecific, allows me to compare only the beginning letters directly
    })
}

function matchName(array, string){
    return array.filter(function(driver){
            return driver.name === string
    })
}
