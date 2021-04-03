import axios from "axios";
// import ApiService from "@shared/services/apiService";

export const useUser = () => {
    const getUser = () => {
        return axios
            .get("https://6066036ab8fbbd0017567ec3.mockapi.io/v1/users")
            .then((response) => {
                return response.data;
            });
    };

    return { getUser };
};
