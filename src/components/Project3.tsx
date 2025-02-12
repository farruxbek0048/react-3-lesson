import { useState } from "react"

function Project3() {
    const [formData, setFormData] = useState({name: '', surname: '', email: '', parol: '' })
    const [errors, setErrors] = useState({name: '', surname: '', email: '', parol: '' });
    
    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        let newErrors = {name: '', surname: '', email: '', parol: '' };
        
        if (formData.name.trim() === '') newErrors.name = "Ism bo'sh bo'lmasligi kerak!"
        if (formData.parol.trim() === ''){
          newErrors.parol = "Parol bo'lishi majburiy!"
        } else if(formData.parol.length <= 6){
            newErrors.parol = "Parol kamida 6 ta belgidan iborat bo'lishi kerak!";
          
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email noto'g'ri formatda!";


        if (newErrors.name || newErrors.email || newErrors.surname || newErrors.parol) { 
          setErrors(newErrors);
        } else {
          console.log("Ma'lumotlar yuborildi:", formData);
          setErrors({name: '', surname: '', email: '', parol: '' });
        }
        
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Iltimos ismingizni kiriting!"/>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />
        Surname: <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Familiya kiritish ixtiyoriy!"/>
        <br />
        Email: <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Iltimos emailingizni kiriting!"/>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />
        Parol: <input type="password" name="parol" value={formData.parol} onChange={handleChange} placeholder="Iltimos parolingizni kiriting!"/>
        {errors.parol && <p style={{ color: "red" }}>{errors.parol}</p>}
        <br />
        <button type="submit">Yuborish</button>
      </form>
    </div>
  )
}

export default Project3
