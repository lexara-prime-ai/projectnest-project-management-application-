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
class UserReset {
    static updatePassword(username, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:3000/users?Username=${username}`);
            const users = yield response.json();
            //This code is used to check the users in the array it throws an error if 
            if (users.length === 0) {
                throw new Error("User not found");
            }
            const user = users[0];
            user.PasswordII = newPassword;
            user.password = newPassword;
            const putResponse = yield fetch(`http://localhost:3000/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (putResponse.status !== 200) {
                throw new Error("Failed to update password");
            }
            //console.log("Password updated");
        });
    }
}
const resetButton = document.querySelector("#sendbtn");
resetButton.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmpassword");
    if (username.value === "" || password.value === "" || confirmPassword.value === "") {
        alert("Please fill all fields before submitting.");
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert("New password and confirm password do not match.");
        return;
    }
    try {
        yield UserReset.updatePassword(username.value, password.value);
        alert("Password successfully updated!");
    }
    catch (error) {
        alert("Not successful");
    }
}));
//   static async updatePassword(id: number) {
//     const response = await fetch(`http://localhost:3000/users/${id}`);
//     const user = await response.json();
//     if (!user) {
//       throw new Error("User not found");
//     }
