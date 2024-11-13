import React from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]*$/, "Phone number must be numbers only")
      .min(10, "Phone number must be at least 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_z2yrs3h", // Replace with your EmailJS service ID
          "template_m4bp83a", // Replace with your EmailJS template ID
          values,
          "N5nJB3FE2cJDQwHAq" // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Email sent successfully!");
          resetForm(); // Reset the form after successful submission
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send email. Please try again.");
        });
    },
  });

  const isFormValidExceptPhone =
    formik.values.name &&
    formik.values.email &&
    formik.values.message &&
    !formik.errors.name &&
    !formik.errors.email &&
    !formik.errors.message;

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="">
        <label>
          <input
            type="text"
            name="name"
            className="form-class"
            placeholder="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error text-red-400">{formik.errors.name}</div>
          ) : null}
        </label>
        <label>
          <input
            placeholder="Phone Number"
            type="tel"
            className="form-class"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error text-red-400">{formik.errors.phone}</div>
          ) : null}
        </label>
        <label>
          {" "}
          <input
            type="email"
            className="form-class"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error text-red-400">{formik.errors.email}</div>
          ) : null}
        </label>
        <label>
          <textarea
            placeholder="Message"
            name="message"
            className="form-class"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error text-red-400">{formik.errors.message}</div>
          ) : null}
        </label>
        <div className="w-full flex justify-end">
        <button
          className="shadow-button rounded-xl p-3 px-10 text-lg font-semibold m-4  "
          type="submit"
          disabled={!isFormValidExceptPhone}
        >
          Send
        </button>
        </div>
      
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
