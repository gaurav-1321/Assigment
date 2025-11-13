import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateMembership({id,close,fetch}){
  const [form,setForm] = useState({duration:"6 months",status:true});
  const token = localStorage.getItem("token");

  useEffect(()=>{
    const getMembership = async()=>{
      const res = await axios.get("http://localhost:5000/api/admin/memberships",{headers:{Authorization:`Bearer ${token}`}});
      const mem = res.data.find(m=>m._id===id);
      if(mem) setForm({duration:mem.duration,status:mem.status==="active"});
    }
    getMembership();
  },[id]);

  const handleChange=(e)=>{
    const {name,value,type,checked}=e.target;
    setForm({...form,[name]:type==="checkbox"?checked:value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/admin/update-membership/${id}`,{duration:form.duration,status:form.status?"active":"cancelled"},{headers:{Authorization:`Bearer ${token}`}});
    fetch();
    close();
    alert("Updated!");
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white p-4 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-4">Update Membership</h1>
        <div className="mb-3">
          {["6 months","1 year","2 years"].map(opt=>(
            <label key={opt} className="mr-3"><input type="radio" name="duration" value={opt} checked={form.duration===opt} onChange={handleChange}/> {opt}</label>
          ))}
        </div>
        <label className="mb-3 flex items-center"><input type="checkbox" name="status" checked={form.status} onChange={handleChange} className="mr-2"/> Active</label>
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Update</button>
        <button type="button" onClick={close} className="w-full mt-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600">Cancel</button>
      </form>
    </div>
  )
}
