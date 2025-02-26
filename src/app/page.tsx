"use client";

import { API } from "@/actions/BaseAPI";
import { LoginRequest } from "@/open-api-generate";

export default function Home() {
    const loginUser = async () => {
        const loginRequest: LoginRequest = {
            email: "test@example.com",
            password: "strongpassword",
        };

        try {
            const response = await API.login({ loginRequest });
            console.log("User logged in:", response);
        } catch (error) {
            console.error("Login error:", error);
        }
    };
    return (
        <div className="h-screen flex justify-center items-center">
            <button className="bg-blue-500 px-4 py-2 rounded text-white" onClick={() => loginUser()}>
                Login
            </button>
        </div>
    );
}
