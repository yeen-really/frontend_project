// 1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(data => data.json())
    .then (data =>{
            let firlterObj = (c) =>{
                if(c.id % 2 == 0){
                    return true;
                } else{
                    return false;
                }
            }
            let result = data.filter(firlterObj)
            console.log(result);
        });
    
// 2
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(data => data.json())
    .then (data =>{
            let firlterObj = (c) =>{
                if(c.title.substr(0, 1) === 'a'){
                    return true;
                } else{
                    return false;
                }
            }
            let result = data.filter(firlterObj)
            console.log(result);
        });

// 3
fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    .then(data => data.json())
    .then (data =>{
            let firlterObj = (c) =>{
                if(c.id >5){
                    return true;
                } else{
                    return false;
                }
            }
            let result = data.filter(firlterObj)
            console.log(result);
        });

