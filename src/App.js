import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [form, setForm] = useState({ userName: "", password: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className='App' style={{ width: "400px" }}>
      <Input
        type={"text"}
        name='userName'
        value={form.userName}
        onChange={handleChange}
      />
      <Input
        type={"password"}
        name='password'
        value={form.password}
        onChange={handleChange}
      />
      <div>{JSON.stringify(form)}</div>
    </div>
  );
}

export default App;
