import { AuthProvider, HttpError } from "react-admin";
import { adminRoleVerification } from "../utils/adminRoleVerification";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */

const url = import.meta.env.VITE_URL;

export const myAuthProvider: AuthProvider = {
    login: async ({ username, password }: { username: string, password: string }) => {
        const request = new Request(`${url}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email: username, password: password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })

        const response: Response = await fetch(request)
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        // if (!(await adminRoleVerification(username))) {
        //     throw new Error(response.statusText);
        // }

        const data = await response.json();

        localStorage.setItem('token', data.token);

        return data;
    },

    logout: () => {
        localStorage.removeItem("token");
        return Promise.resolve();
    },

    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
        return Promise.resolve(undefined);
    },
    getIdentity: () => {
        const persistedUser = localStorage.getItem("token");
        const user = persistedUser ? JSON.parse(persistedUser) : null;

        return Promise.resolve(user);
    },
};
