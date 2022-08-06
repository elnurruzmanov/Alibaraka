import React from "react";
import "./Register.css";

import Gardener from "../images/gardender.png";

import Slide from 'react-reveal/Slide';


import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };
  // console.log(errors);

  return (
    <>
      <div className="Register">
      <Slide left>
        <div className="container">
          <img src={Gardener} alt="" />
          <h3 className="register-title">BIZGA SAVOLLARINGIZ BORMI?</h3>
          <p className="register-text">
            Agar sizda biror taklif yoki savollar bo'lsa, mana shu yerda yozib
            qoldiring, biz doim javob berishga shaymiz.
          </p>
          <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="form-input">
              <label className="contact-label">
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  required
                  className={`inputs ${errors.name && "invalid"}`}
                  {...register("name", { required: " " })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                  //
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
                  className={`inputs ${errors.number && "invalid"}`}
                  {...register("number", {
                    required: "Number is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Invalid phone no",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("number");
                  }}
                />
              </label>

              <textarea
                placeholder="Murojaatni kiriting"
                id="textarea"
                name="textarea"
                className={`contact-textarea ${errors.textarea && "invalid"}`}
                {...register("textarea", {
                  required: "Number is required",
                  minLength: {
                    value: 10,
                    message: "Minimum Required length is 10",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum allowed length is 50",
                  },
                })}
                onKeyUp={() => {
                  trigger("textarea");
                }}
              ></textarea>
            </div>
            <button type="submit" className="form-btn">
              Xabar Jo'natish
            </button>
          </form>
        </div>
        </Slide>
      </div>
    </>
  );
};

export default Register;
