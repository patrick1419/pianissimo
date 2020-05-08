var data = {
    username: 'patrick',
    password: 'hello'
}

var userlist = {
    user: [
        ['Patrick', 'world'],
        ['Laura', 'hello'],
        ['Jan', 'bye'],
        ['Tom', 'ciao']
    ]
}

var usercontainer = [
    {element: 'Patrick'},
    {element: 'Laura'},
    {element: 'Jan'},
    {element: 'Tom'}
]

var title = new Vue({
    el: '#title',
    data: {
        title: 'Welcome to Pianissimo'
    }
})

var vm = new Vue({
    el: '#sub-content',
    data: {
        usernameLabel: 'Username:',
        passwordLabel: 'Password:',
        selectedUser:"Select a user",
        headline: 'Saved users',
        usercontainer
    },
    methods: {
        changeUser: function() {
           this.username = this.selectedUser
        },
        checkUser: function(username, password) {
            var index;
            
            for(index = 0; index < userlist.user.length; index++) {
                if(userlist.user[index][0] == username && userlist.user[index][1] == password)
                    return true;
            }
        },
        submitTrigger: function(event) {
            if(this.username && this.password) 
                this.checkUser(this.username, this.password) ? alert('Login succeed') : alert('Login failed')
            else {
                alert('Füllen Sie alle Felder aus')
            }
        }
     },
})

var reg = new Vue({
    el: '#registrate',
    data: {
        chooseUsernameLabel: 'Choose a username:',
        choosePasswordLabel: 'Choose a password:',
        repeatPasswordLabel: 'Repeat your password:'
    },
    methods: {
        triggerFormular: function() {
            var formular = document.getElementById('registrateMe');
            var openButton = document.getElementById('openFormular');

            formular.classList.remove('hide--element');
            openButton.classList.add('hide--element');
        },
        triggerRegistration: function(event) {
            if(this.chooseUsername && this.choosePassword && this.repeatPassword) 
                (this.choosePassword==this.repeatPassword) ? alert('Registration succeed') : alert('Your passwords are not equal')
             else {
                 event.preventDefault();
                alert('Füllen Sie alle Felder aus')
             }
        }
    }
})