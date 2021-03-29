// Add your code here
function submitData(name, email) { // CREATE A FUNCTION THAT ACCEPT TO ARGUEMENTS - NAME, EMAIL
    return fetch('http://localhost:3000/users', { // FETCH USERS HTML T0 SEND INFO
        method: 'POST', // POST TO SEND INFO TO SERVER
        headers: { // HEADERS ALWAYS NEEDED
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ // MAKE POST A STRING
            name, 
            email
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object['id']
    })
    .catch(function(error) {
        alert('Bad things!')
        document.body.innerHTML = error.message
    });
};

submitData();