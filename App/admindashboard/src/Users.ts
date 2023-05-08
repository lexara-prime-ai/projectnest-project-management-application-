// DEBUGGING
const debug = console.log;

class Users {
    ////////////////////////////////
    // METHOD FOR GETTING ALL USERS
    ////////////////////////////////
    static async getUsers() {
    const response = await fetch(`http://localhost:3000/users`);
    const users = await response.json();

    // SELECTORS
    const userContainer = document.querySelector('.user-container') as HTMLElement;

   // LOOP THROUGH RESPONSE
        for (let user of users) {
            userContainer.innerHTML += `
            <div class="user-card selected">
            <div class="user">
                <a href="#" class="user-icon">
                    <ion-icon name="person-outline" class="user-icon"></ion-icon>
                </a>
    
                <h2 class="user-name">
                    ${user.Username}
                </h2>
            </div>

            <div class="user-status">
                <h3 class="status active">
                    active
                </h3>
            </div>

            <a href="#" class="trash-icon" onclick=Users.deleteUser(${user.id})>
                <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
            </a>
        </div>
            `;
        }
    }

    ////////////////////////////
    // METHOD FOR DELETING USER
    ////////////////////////////
    static async deleteUser(id:number) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        alert('User deleted!');
    }
}

Users.getUsers()

