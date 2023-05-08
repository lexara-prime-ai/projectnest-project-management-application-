class UserReset {
       static async updatePassword(username: string, newPassword: string) {
        const response = await fetch(`http://localhost:3000/users?Username=${username}`);
       const users = await response.json();
//This code is used to check the users in the array it throws an error if 
    if (users.length === 0) {
      throw new Error("User not found");
    }

    const user = users[0];

    user.PasswordII = newPassword;
    user.password = newPassword;

    const putResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
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
  }
}

const resetButton = document.querySelector("#sendbtn") as HTMLButtonElement;
resetButton.addEventListener("click", async (e: Event) => {
  e.preventDefault();

  const username = document.querySelector("#username") as HTMLInputElement;
  const password = document.querySelector("#password") as HTMLInputElement;
  const confirmPassword = document.querySelector("#confirmpassword") as HTMLInputElement;

  if (username.value === "" || password.value === "" || confirmPassword.value === "") {
    alert("Please fill all fields before submitting.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("New password and confirm password do not match.");
    return;
  }

  try {
    await UserReset.updatePassword(username.value, password.value);
    alert("Password successfully updated!");
  } catch (error) {
    alert("Not successful");
  }
});





  //   static async updatePassword(id: number) {
  //     const response = await fetch(`http://localhost:3000/users/${id}`);
  //     const user = await response.json();
  
  //     if (!user) {
  //       throw new Error("User not found");
  //     }
  
 
  
 