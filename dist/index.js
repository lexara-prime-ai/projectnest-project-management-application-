"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Users {
    Showusers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:3000/users');
            const users = yield response.json();
            //console.log(users);
        });
    }
}
class UserData {
    adddata(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input),
            });
            const result = yield response.json();
            console.log(result);
        });
    }
}
const addButton = document.querySelector('#signupbtn');
addButton.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const Usersemail = document.querySelector('#username1');
    const Userfullname = document.querySelector('#username2');
    const Username = document.querySelector('#username3');
    const PasswordII = document.querySelector('#passwordII');
    const password = document.querySelector('#password');
    function checkIfUserExists() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:3000/users');
            const users = yield response.json();
            const foundUser = users.find((user) => user.Username === Username.value);
            if (foundUser) {
                alert('User already exists!');
                return true;
            }
            return false;
        });
    }
    const userExists = yield checkIfUserExists();
    if (userExists) {
        return;
    }
    if (Usersemail.value === '' ||
        Userfullname.value === '' ||
        Username.value === '' ||
        PasswordII.value === '' ||
        password.value === '') {
        e.preventDefault();
        alert('Please fill all fields before submitting.');
        return;
    }
    if (PasswordII.value !== password.value) {
        e.preventDefault();
        alert('please make sure your passwords match');
        return;
    }
    const input = {
        Usersemail: Usersemail.value,
        Userfullname: Userfullname.value,
        Username: Username.value,
        PasswordII: PasswordII.value,
        password: password.value,
    };
    new UserData().adddata(input);
    window.location.href = '/projecrnest/group/login.html';
}));
