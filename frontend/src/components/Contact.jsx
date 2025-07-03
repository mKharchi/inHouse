import React, { useEffect, useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { LuHouse } from 'react-icons/lu'
import { MdPhoneCallback } from 'react-icons/md'
import { useLocation } from 'react-router'
import Input from "./Input.jsx"



const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  })
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceFromUrl = params.get("service");
    if (serviceFromUrl) {
      setForm(prev => ({ ...prev, service: serviceFromUrl }));
    }
  }, [location.search]);
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    emailJs.send("service_mnehd7q", "template_kyv9r5p",
      {
        from_name: form.name,
        to_name: "kharchi merouane",
        message: form.note,
        email: form.email,
        phone: form.phone,
      }, "AXN0NM8BSmKr1TVYt").then((data) => {
        setLoading(false)
        alert("message sent")
        setForm({
          email: "",
          name: "",
          note: "",
          phone: "",
          service: ""
        })
      })

  }


  return (
    <div className='w-full h-full flex flex-col justify-start items-center  bg-secondary text-primary'>


      <form className='rounded-4xl shadow-2xl p-4  sm:px-6 sm:py-9 w-9/10 sm:w-[60%] bg-white flex flex-col  items-center justify-center gap-3' onSubmit={handleSubmit}>
        {
          [{ name: 'name', placeholde: 'Enter your name', type: 'text' },
          { name: 'email', placeholde: 'Enter your email', type: 'email' },
          { name: 'phone', placeholde: 'Enter your phone number ', type: 'text' },
          { name: 'note', placeholde: 'Let us a note', type: 'text' },
          ].map((el, index) => <Input placeholder={el.placeholde} name={el.name} type={el.type} onChange={handleChange} value={form[el.name]} className="w-full" key={index} />)
        }
        <button disabled={loading} className='hover:opacity-80 transition-all duration-300 ease-in-out sm:mt-4 px-6 py-2 sm:py-4 bg-primary text-white text-xl rounded-lg'>{loading ? "Sending" : "Submit"}</button>
      </form>
    </div>
  )
}

const Contact = () => {

  const meth = [{
    title: "Visit Us :", text: "Mariendalsvej 50D 2 2000 Frederiksberg.", icon: <LuHouse height={20} width={20} className='w-6 h-6' />
  }, {
    title: "Drop Us :", text: "support@beautyness.com", icon: <CiMail height={20} width={20} className='w-6 h-6' />
  }, {
    title: "Call Us :", text: "Call: 1-800-123-9999", icon: <MdPhoneCallback height={20} width={20} className='w-6 h-6' />
  },]
  return (
    <div className='w-full min-h-[60vh]  gap-4 sm:gap-0  flex flex-col sm:flex-row  px-4 sm:px-40 items-center py-16 justify-between'>
      <div className='w-full h-full flex flex-col gap-4 justify-start items-start'>
        <p className='w-full text-xl sm:text-3xl sm:max-w-2/3 font-light'>
          Get in touch with us and schedule a visit with no obligation!
        </p>
        <div className='w-full h-full text-left flex gap-2 flex-col justify-center items-start'>
          {meth.map((el, index) => (<div key={index} className='flex items-center justify-start gap-2'>
            <h2 className=' sm:text-3xl text-left  font-semibold'>{el.title}</h2>
            <p className='  sm:text-xl text-left '>{el.text}</p>
          </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

export default Contact