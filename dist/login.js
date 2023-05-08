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
class logins {
    Showuser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:3000/users");
            const users = yield response.json();
            const user = users.find((u) => u.Username === username);
            if (user && user.password === password) {
                window.location.href = "http://localhost:5500/App/userdashboard/index.html"; //where the log in dashboard is
            }
            else {
                alert("Username or password is incorrect.");
            }
            if (username === "admin") {
                window.location.href = "http://localhost:5500/App/admindashboard/index.html"; // where the admin dashboard link should be
            }
        });
    }
}
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;
    new logins().Showuser(username, password);
});
