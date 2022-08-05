import React from "react";
import "./Register.css";

import Gardener from "../images/gardender.png";

import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(errors);

  return (
    <>
      <div className="Register">
        <div className="container">
          <img src={Gardener} alt="" />
          <h3 className="register-title">BIZGA SAVOLLARINGIZ BORMI?</h3>
          <p className="register-text">
            Agar sizda biror taklif yoki savollar bo'lsa, mana shu yerda yozib
            qoldiring, biz doim javob berishga shaymiz.
          </p>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <label className="contact-label">
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  required
                  className="inputs"
                  {...register("name", { required: "Name is required", min:{
                    value:12,
                    message:"Ism kiritilmagan hali"
                  } })}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </label>
              <label className="contact-label">
                <input
                  type="number"
                  placeholder="+375259577762"
                  required
                  className="inputs"
                  {...register("number", { required: "Number is required" })}
                />
              </label>

              <textarea
                placeholder="Murojaatni kiriting"
                id="textarea"
                name="textarea"
                className="contact-textarea"
                {...register("textarea", { required: "Number is required" })}
              ></textarea>
            </div>
            <button type="submit" className="form-btn">
              Xabar Jo'natish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
