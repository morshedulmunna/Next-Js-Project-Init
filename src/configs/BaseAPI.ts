import { AuthenticationApi } from "@/open-api-generate";
import * as runtime from "@/open-api-generate";

// Function to retrieve token
const getToken = () => localStorage.getItem("auth_token"); // Modify based on your auth system

// Create API configuration with custom headers and settings
const config = new runtime.Configuration({
    basePath: "http://localhost:5000", //  API base URL
    fetchApi: async (url, init) => {
        const headers = new Headers(init?.headers);
        const token = getToken();

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        // Add any other custom headers
        headers.set("Content-Type", "application/json");
        headers.set("X-Custom-Header", "YourCustomValue");

        return fetch(url, {
            ...init,
            headers,
            credentials: "include",
        });
    },
    middleware: [],
    credentials: "include", // Ensure credentials (cookies) are sent
});

// Create an instance of AuthenticationApi with the custom configuration
export const API = new AuthenticationApi(config);
