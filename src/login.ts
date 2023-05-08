interface Userinfo {
    password: string;
    Username: string;
}

class logins {
    async Showuser(username: string, password: string) {
        const response = await fetch("http://localhost:3000/users");
        const users: Userinfo[] = await response.json();

        const user = users.find((u) => u.Username === username);

        if (user && user.password === password) {

            window.location.href = "/user dashboard/index.html"; //where the log in dashboard is
        } else {
            alert("Username or password is incorrect.");
        }
        if (username === "admin") {
            window.location.href = "./App/admindashboard/index.html" // where the admin dashboard link should be
        }
    }
}

      const loginForm = document.getElementById("login-form") as HTMLFormElement;
       loginForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();


    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;

    new logins().Showuser(username, password);
});
