import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [show, SetShow] = useState(false);
  const [loading, setLoading] = useState(false);
 // const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // function:
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <div className="w-full flex h-screen bg-primary/50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[24px] bg-primary border border-secondary/50 w-[573px] py-10 shadow-lg">
          <div className="text-center ">
            <h3 className="font-primaryBold text-2xl">Login</h3>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-8 font-primaryTest ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-3/4 mx-auto flex flex-col gap-5"
            >
              <div>
                <input
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                  })}
                  className={`w-full py-4 px-6 focus:outline-none border rounded-[24px]
                    ${
                      errors.email?.message
                        ? 'border-red-500 placeholder:text-red-500'
                        : 'border-secondary/30'
                    }`}
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  id="email"
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
              <div className="w-full relative">
                <input
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  })}
                  className={`w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]
                    ${
                      errors.password?.message
                        ? 'border-red-500 placeholder:text-red-500'
                        : 'border-secondary/30'
                    }`}
                  placeholder="Enter Your Password"
                  type={show ? 'text' : 'password'}
                  name="password"
                  id="password"
                />
                <p className="text-red-500">{errors.password?.message}</p>
                <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10">
                  {show ? (
                    <FaRegEye
                      onClick={() => SetShow(!show)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => SetShow(!show)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center  justify-end">
                <Link to="/reset-password" className="text-textLight underline">
                  Forgot Password
                </Link>
              </div>

              {/* button */}
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className={`transition flex items-center justify-center h-14 duration-300 hover:bg-transparent hover:text-secondary py-4 rounded-[24px] font-semibold bg-secondary border border-[#666633] text-white  w-full opacity-100`}
                >
                  <span>
                    {loading ? (
                      <CgSpinnerTwo className="size-6 animate-spin" />
                    ) : (
                      'Login'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
