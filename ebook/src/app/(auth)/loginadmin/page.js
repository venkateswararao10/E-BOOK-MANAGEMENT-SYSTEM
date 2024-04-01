'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { book_users } from "@/lib/data/book-user";
import { session } from "@/lib/data/datasession";
export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const response = await fetch("/api/adminlogin", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok===true){
        alert("Admin successfully logged in");
        
        router.push('/admin');
      }
      else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="relative overflow-hidden h-screen bg-gradient-to-br from-purple-400 to-pink-600">
      <div className="container mx-auto px-4 py-8 relative z-10 flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
