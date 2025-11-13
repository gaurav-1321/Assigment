import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:"", email: "", password: "", role: "user" });
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister
        ? "http://localhost:5000/api/register"
        : "http://localhost:5000/api/login";

      const res = await axios.post(url, form);

      if (isRegister) {
        alert("Registered successfully! You can now login.");
        setIsRegister(false);
        setForm({ name:"", email: "", password: "", role: "user" });
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      if(res.data.role==="admin") navigate("/admin");
      else if(res.data.role==="vendor") navigate("/vendor");
      else navigate("/user");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-4 text-center">
          {isRegister ? "Register" : "Login"}
        </h1>

        {isRegister && (
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <div className="mb-3">
          {["admin","vendor","user"].map(r=>(
            <label key={r} className="mr-3">
              <input type="radio" name="role" value={r} checked={form.role===r} onChange={handleChange} className="mr-1"/>
              {r.charAt(0).toUpperCase()+r.slice(1)}
            </label>
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-3">
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="text-center text-sm">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button" onClick={()=>setIsRegister(!isRegister)} className="text-blue-600 underline">
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  )
}
