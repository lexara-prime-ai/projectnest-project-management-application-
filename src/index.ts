interface Userinfo {
  Usersemail: string;
  Userfullname: string;
  Username: string;
  PasswordII: string;
  password: string;
}

class Users {
  async Showusers() {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    //console.log(users);
  }
}

class UserData {
  async adddata(input: Userinfo) {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    const result = await response.json();
    console.log(result);
   
  }
}

const addButton = document.querySelector('#signupbtn') as HTMLButtonElement;
addButton.addEventListener('click', async (e: Event) => {
  e.preventDefault();
  const Usersemail = document.querySelector('#username1') as HTMLInputElement;
  const Userfullname = document.querySelector('#username2') as HTMLInputElement;
  const Username = document.querySelector('#username3') as HTMLInputElement;
  const PasswordII = document.querySelector('#passwordII') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;

  async function checkIfUserExists() {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    const foundUser = users.find((user: any) => user.Username === Username.value);

    if (foundUser) {
      alert('User already exists!');
      return true;
    }

    return false;
  }

  const userExists = await checkIfUserExists();
  if (userExists) {
    return;
  }

  if (
    Usersemail.value === '' ||
    Userfullname.value === '' ||
    Username.value === '' ||
    PasswordII.value === '' ||
    password.value === ''
  ) {
    e.preventDefault();
    alert('Please fill all fields before submitting.');
    return;
  }

  if (PasswordII.value !== password.value) {
    e.preventDefault();
    alert('please make sure your passwords match');
    return;
  }

  const input: Userinfo = {
    Usersemail: Usersemail.value,
    Userfullname: Userfullname.value,
    Username: Username.value,
    PasswordII: PasswordII.value,
    password: password.value,
  };
  new UserData().adddata(input);

 window.location.href = '/projecrnest/group/login.html';
});

