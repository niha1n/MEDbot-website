   document.getElementById('loginScreen').style.display="block"
   document.getElementById('userDataScreen').style.display="none"
   
   function showData() {
        let data=[]
        firebase.firestore().collection('data').get().then(docs=>
            {docs.forEach(doc=>{
            // console.log(doc.data())
            data.push(doc.data())
             })

                // console.log(data)
                for(let i=0; i < data.length ; i++){
                    // console.log(data[i])
                    document.getElementById('res').innerHTML += `
                    <tr>
                        <td>${data[i].Name}</td>
                        <td>${data[i].mail}</td>
                        <td>${data[i].msg}</td>
                    </tr>
                    `

                }
           
                
                
        }).catch(e=>{
            console.log('error',e)
        })
    }
    document.getElementById('loginBtn').addEventListener('click', loginUser)

    function loginUser() {
        var provider= new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)

          
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

        console.log('testing')
        
    }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        //   document.getElementById('userDetails').innerHTML= `
        //   <p> Email= ${displayName}`
         document.getElementById('loginScreen').style.display="none"
          document.getElementById('userDataScreen').style.display="block"
          // ...
        } else {
            document.getElementById('loginScreen').style.display="block"
            document.getElementById('userDataScreen').style.display="none"
        }
      });
      function logout() {
          
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('User Logged Out!');
            document.getElementById('loginScreen').style.display="block"
            document.getElementById('userDataScreen').style.display="none"
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });

      }

    showData()