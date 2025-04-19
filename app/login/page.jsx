"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            username: e.target.username.value,
            password: e.target.password.value,
        });

        if (res.error) {
            setError("Giriş başarısız.");
        } else {
            router.push("/");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg"
        >
            <h1 className="text-2xl font-bold mb-4 text-center">Giriş Yap</h1>
            <div className="mb-4">
                <input
                    name="username"
                    placeholder="Kullanıcı Adı"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    name="password"
                    type="password"
                    placeholder="Şifre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Giriş
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
}
