// 01. Create a mock user json object.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let users = [

  {   
    id: 1,
    name: "Clark Kent",
    email: "ckent@dailyglobe.com",
    password: "lasereyes"
  },

  {
    id: 2,
    name: "Bruce Wayne",
    email: "bwayne@wayneenterprises.com",
    password: "batmobile"
  },

  {
    id: 3,
    name: "Thor Odinson",
    email: "todison@norsekingdom.gov",
    password: "mjolnir"
  }
  
];

function getEmail() {
  let emailInput = ""
  let passwordInput = ""
  readline.question('Email: > ', emailProvided => {
    emailInput = emailProvided
    if(emailProvided) {
      readline.question('Password > ', passwordProvided => {
        if(passwordProvided) {
          passwordInput = passwordProvided
          for(let i = 0; i < users.length; i++) {
            if(users[i]['email'] === emailInput && users[i]['password'] === passwordInput){
              console.log(`Welcome ${users[i]['name']}, Your email is ${users[i]['email']}.`)
            }
          }
        }
      })
    }
  })
  
}

let userInputedInfo = getEmail()
