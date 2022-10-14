import axios from "axios";

// Repositórios Github
export const getReposRequest = () =>
    axios({
        url: "https://api.github.com/users/sanavila/repos",
        method: "GET"
    })
        .then((response) => {
            return { kind: "ok", data: response.data };
        })
        .catch((error) => {
            return error.response;
        });
