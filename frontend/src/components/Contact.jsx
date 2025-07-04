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
    // emailJs implementation here
    // ... your existing emailJs code
  }

  return (
    <div className='w-full flex flex-col justify-start items-center bg-secondary text-primary'>
      <form 
        className='rounded-2xl sm:rounded-4xl shadow-2xl p-4 py-6 sm:p-6 lg:p-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-white flex flex-col items-center justify-center gap-4 ' 
        onSubmit={handleSubmit}
      >
        {[
          { name: 'name', placeholde: 'Enter your name', type: 'text' },
          { name: 'email', placeholde: 'Enter your email', type: 'email' },
          { name: 'phone', placeholde: 'Enter your phone number', type: 'text' },
          { name: 'note', placeholde: 'Leave us a note', type: 'text' },
        ].map((el, index) => (
          <Input 
            placeholder={el.placeholde} 
            name={el.name} 
            type={el.type} 
            onChange={handleChange} 
            value={form[el.name]} 
            className="w-full" 
            key={index} 
          />
        ))}
        <button 
          disabled={loading} 
          className='hover:opacity-80 transition-all duration-300 ease-in-out mt-2 sm:mt-4 px-4 py-2 sm:px-6 sm:py-3 lg:py-4 bg-primary text-white text-base sm:text-lg lg:text-xl rounded-lg w-full sm:w-auto'
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

const Contact = () => {
  const contactMethods = [
    {
      title: "Visit Us:", 
      text: "Mariendalsvej 50D 2 2000 Frederiksberg.", 
      icon: <LuHouse className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
    }, 
    {
      title: "Email Us:", 
      text: "support@beautyness.com", 
      icon: <CiMail className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
    }, 
    {
      title: "Call Us:", 
      text: "1-800-123-9999", 
      icon: <MdPhoneCallback className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
    }
  ]
  
  return (
    <div className='w-full sm:min-h-screen lg:min-h-[60vh] flex flex-col lg:flex-row px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 items-center py-8 sm:py-12 lg:py-16 gap-6 lg:gap-8 xl:gap-12'>
      {/* Left Section - Contact Info */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 justify-start items-start'>
        <h2 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed'>
          Get in touch with us and schedule a visit with no obligation!
        </h2>
        
        <div className='w-full flex flex-col gap-3 sm:gap-4 justify-start items-start'>
          {contactMethods.map((method, index) => (
            <div key={index} className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
              <div className='flex items-center gap-2 sm:gap-3'>
                {method.icon}
                <h3 className='text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold whitespace-nowrap'>
                  {method.title}
                </h3>
              </div>
              <p className='text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 break-words'>
                {method.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className='w-full lg:w-1/2 flex justify-center items-center'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact