document.getElementById('shareBtn').addEventListener('click', addData)
function addData() {
    let nAme = document.getElementById('Name').value
    let message = document.getElementById('msg').value
    let Mail = document.getElementById('email').value
    
    let datatoadd = {
        Name: nAme,
        mail: Mail,
        msg: message
    }
    firebase.firestore().collection('data').add(datatoadd).then(res=>{
        alert('data added')
    }).catch(e=>
        {console.log('error')
    })
    
    
    
}

