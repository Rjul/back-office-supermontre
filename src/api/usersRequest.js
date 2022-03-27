
export default {
    get(users) {
        async function getUsers() {
            try {
                const response = await fetch("http://localhost:8080/fake-data/users.json", {
                    method: "GET",
                    mode: 'cors'
                }, true);
                console.log(response);
                return await response.json();
            } catch (response_1) {
                console.error(response_1);
            }
        }

        getUsers().then((usersRow) => users(usersRow));

    }
}
