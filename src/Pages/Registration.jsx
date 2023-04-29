import React, { useState } from "react";
import {
  MdArrowForward,
  MdLockOutline,
  MdOutlineMailOutline,
} from "react-icons/md";
import InputField from "../components/InputField";
const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [forgetPass, setForgetPass] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!isLogin) {
    }
  };
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full top-0  h-screen flex justify-center items-center -z-10 absolute ">
      {forgetPass ? (
        <ForgetPassword
          form={form}
          handelChange={handelChange}
          setForgetPass={setForgetPass}
        />
      ) : (
        <div className="border-2 bg-slate-50 rounded-lg p-10  block lg:w-[400px] w-[90%]  shadow-2xl">
          <p className="font-cairo py-5 font-bold text-[18px] text-primary">
            {!isLogin ? "تسجيل" : "تسجيل الدخول"}
          </p>

          <form className="flex flex-col gap-5" onSubmit={handelSubmit}>
            <InputField
              prefixIcon={
                <MdOutlineMailOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              }
              type="text"
              name="email"
              onChange={handelChange}
              placeholder="البريد الإلكتروني"
              value={form.email}
            />
            <InputField
              prefixIcon={
                <MdLockOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              }
              type="password"
              name="password"
              onChange={handelChange}
              placeholder="كلمة المرور"
            />

            {!isLogin && (
              <InputField
                prefixIcon={
                  <MdLockOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                }
                type="password"
                name="passwordConfirmation"
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
                placeholder="تأكيد كلمة المرور"
              />
            )}
            {isLogin && (
              <div className="text-xs font-cairo text-gray-500 ">
                تواجه مشكلة في تسجيل الدخول؟
                <span
                  className=" font-extrabold  font-cairo text-gray-500 cursor-pointer"
                  onClick={() => setForgetPass(true)}
                >
                  &nbsp;نسيت كلمة المرور
                </span>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-primary py-3 my-5 px-8 outline-none w-full  font-cairo text-white  shadow-md  rounded-xl"
            >
              {!isLogin ? "تسجيل" : "تسجيل الدخول"}
            </button>
          </form>
          <div className="text-xs font-cairo text-gray-500 w-full text-center my-5">
            {isLogin && <span>ليس&nbsp;</span>}لديك حساب؟
            <span
              className=" font-extrabold  font-cairo text-gray-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              &nbsp;{isLogin ? "سجل الآن" : "تسجيل الدخول"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const ForgetPassword = ({ form, handelChange, setForgetPass }) => {
  const handelSubmit = () => {};

  return (
    <div className=" relative border-2 bg-slate-50 rounded-lg p-10  block lg:w-[400px] w-[90%]  shadow-2xl">
      <MdArrowForward
        className=" absolute top-5 right-5"
        size={24}
        onClick={() => {
          setForgetPass(false);
        }}
      />
      <p className="font-cairo py-5 font-bold text-[18px] text-primary">
        إعادة تعيين كلمة المرور
      </p>

      <form className="flex flex-col gap-5" onSubmit={handelSubmit}>
        <InputField
          prefixIcon={
            <MdOutlineMailOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          }
          type="text"
          name="email"
          onChange={handelChange}
          placeholder="البريد الإلكتروني"
          value={form.email}
        />

        <div className="text-xs font-cairo text-gray-500 ">
          سيتم إرسال رسالة تعيين كلمة المرور الى البريد الإلكتروني المكتوب.
        </div>
        <button
          type="submit"
          className="bg-primary py-3 my-5 px-8 outline-none w-full  font-cairo text-white  shadow-md  rounded-xl"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default Registration;
