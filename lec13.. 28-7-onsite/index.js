fetch('http://localhost:8000/products').then(
    (res)=>{
        console.log(res);
        return res.json()
    }).then(
        (data)=>{
            console.log(data);
        }
    )
