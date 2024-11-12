import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_z2yrs3h', // استبدلها بـ Service ID الخاص بك من EmailJS
      'template_m4bp83a', // استبدلها بـ Template ID الخاص بك من EmailJS
      formData,
      'N5nJB3FE2cJDQwHAq' // استبدلها بـ User ID الخاص بك من EmailJS
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('تم إرسال الرسالة بنجاح!');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('حدث خطأ أثناء إرسال الرسالة.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className='text-black'>
      <label>
        الاسم:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        رقم الهاتف:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        البريد الإلكتروني:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        الرسالة:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">إرسال</button>
    </form>
  );
};

export default ContactForm;
