// 
function fetchUserData(userId, callback){
    setTimeout(function() {
        const users = {
            
                1 : {id: 1, name: "Naveen"},
                2 : {id: 2, name: "Tom"}
        };

        const user = users[userId]
        if (user) {
            callback(null, user)
        }else {
            callback("user not found..", null)
        }
    
    }, 2000);
}

// callback function
function handleUserData(error, user) {
    if(error) {
        console.error("Error: " , error)
    }
    else {
        console.log("User " , user)
    }
}

fetchUserData(1, handleUserData);