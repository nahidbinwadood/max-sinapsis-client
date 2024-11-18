import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CgSpinnerTwo } from 'react-icons/cg';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SetPassword = () => {
  const [show, SetShow] = useState(false);
  const [showAgain, SetShowAgain] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // function:
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    if (data) {
      if (data.newPassword == data.confirmPassword) {
        setTimeout(() => {
          setLoading(false);
          setPasswordChanged(true);
          toast.success('Successfully changed your password !');
          //   navigate('/verify-email');
        }, 2000);
      } else {
        toast.error('Passwords do not match!');
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex h-screen bg-primary/50 max-h-[100vh]">
      {!passwordChanged ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-[24px] bg-primary border border-secondary w-full mx-5 md:mx-0 sm:w-[573px] py-10 px-5 md:px-0">
            <div className="text-center md:mt-10">
              <h3 className="font-primaryBold text-lg md:text-2xl">
                Change Password
              </h3>
            </div>
            <div className="flex items-center justify-center md:mt-3 w-full sm:w-2/3 font-primaryMedium mx-auto text-secondary text-center text-sm md:text-base">
              <p className="flex gap-2 items-center py-2">
                Must be 6-20 characters (letters, numbers or symbols)
              </p>
            </div>

            {/* form */}
            <div className="flex flex-col gap-3 md:gap-5 items-center justify-center mt-4 md:mt-6 font-primaryTest">
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="w-full sm:w-3/4 mx-auto flex flex-col gap-3 md:gap-5 text-sm md:text-base"
              >
                <div className="w-full relative h-12 md:h-14 lg:h-16">
                  <input
                    {...register('newPassword', {
                      required: {
                        value: true,
                        message: 'New Password is required',
                      },
                    })}
                    className={`w-full py-2.5 md:py-3.5 lg:py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]
                        ${
                          errors.newPassword?.message
                            ? 'border-red-500 placeholder:text-red-500'
                            : 'border-secondary/30'
                        }
                        `}
                    placeholder="New Password"
                    type={show ? 'text' : 'password'}
                    name="newPassword"
                    id="newPassword"
                  />

                  <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10 -mt-[3px]">
                    {show ? (
                      <FaRegEye
                        onClick={() => SetShow(!show)}
                        className=" size-4 md:size-5 cursor-pointer text-textLight"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => SetShow(!show)}
                        className="size-4 md:size-5 cursor-pointer text-textLight"
                      />
                    )}
                  </div>
                  <p className="text-red-500">{errors.newPassword?.message}</p>
                </div>
                <div className="w-full relative h-12 md:h-14 lg:h-16">
                  <input
                    {...register('confirmPassword', {
                      required: {
                        value: true,
                        message: 'Confirm Password is required',
                      },
                    })}
                    className="w-full py-2.5 md:py-3.5 lg:py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                    placeholder="Confirm Password"
                    type={showAgain ? 'text' : 'password'}
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                  <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10 -mt-[3px]">
                    {showAgain ? (
                      <FaRegEye
                        onClick={() => SetShowAgain(!showAgain)}
                        className="size-4 md:size-5 cursor-pointer text-textLight"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => SetShowAgain(!showAgain)}
                        className="size-4 md:size-5 cursor-pointer text-textLight"
                      />
                    )}
                  </div>
                  <p className="text-red-500">
                    {errors.confirmPassword?.message}
                  </p>
                </div>

                {/* button */}
                <div className="flex items-center justify-center mt-2 md:mt-4">
                  <button
                    type="submit"
                    className={`transition flex items-center justify-center h-[42px] md:h-12 lg:h-14 duration-300 hover:bg-transparent hover:text-secondary py-2.5 md:py-3.5 lg:py-4 rounded-[24px] font-semibold bg-secondary border border-secondary text-white  w-full opacity-100`}
                  >
                    <span>
                      {loading ? (
                        <CgSpinnerTwo className="size-6 animate-spin" />
                      ) : (
                        'Change Password'
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/50">
          <div className="rounded-[24px] bg-primary border border-[#E5E5E5] w-full sm:w-[573px] lg:py-10 lg:px-16 text-center shadow-lg mx-5 md:mx-0 px-5 md:px-8">
            <div className="flex flex-col items-center justify-center my-28">
              <h3 className="font-primaryBold text-lg md:text-2xl">
                Change Password
              </h3>
              <p className="text-secondary font-primaryMedium mt-3 text-sm md:text-base md:mt-5">
                Your Password has been updated. You can now sign in with this
                password.
              </p>
              <button
                type="submit"
                onClick={() => navigate('/login')}
                className={`transition font-primaryTest mt-5 md:mt-8 lg:mt-10 flex items-center justify-center h-[42x] md:h-12 lg:h-14 duration-300 hover:bg-transparent hover:text-secondary py-2.5 md:py-3.5 lg:py-4 rounded-[24px] font-semibold bg-secondary border border-secondary text-white  w-full opacity-100 text-sm md:text-base`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetPassword;
