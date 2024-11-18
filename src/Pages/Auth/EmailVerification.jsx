import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
      toast.success(`Verified`);
      navigate('/set-password');
    }, 2000);
  };
  return (
    <div className="w-full flex h-screen bg-primary/50 max-h-[100vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[24px] border px-5 md:px-0 bg-primary border-secondary/50 shadow-lg mx-5 md:mx-0 w-full sm:w-[573px] py-10">
          <div className="text-center mt-5 md:mt-10">
            <h3 className="font-primaryBold text-lg md:text-2xl">
              Email Verification Code
            </h3>
          </div>
          <div className="flex font-primaryMedium text-sm md:text-base text-secondary items-center justify-center mt-2 md:mt-4 lg:mt-6 text-center w-full sm:w-1/2 mx-auto">
            <p>Enter the 6-digit code we emailed to nahid*****@gmail.com</p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-full sm:w-3/4 mx-auto flex text-sm md:text-base flex-col gap-5 font-primaryTest"
            >
              {/* OTP */}

              <div className="w-full space-y-2 h-10 sm:h-12 md:h-14 lg:h-16">
                <input
                  {...register('otp', {
                    required: {
                      value: true,
                      message: 'OTP is required',
                    },
                  })}
                  className={`w-full py-2.5 md:py-3.5 lg:py-4 px-6 focus:outline-none border rounded-[24px]
                    ${
                      errors.otp?.message
                        ? 'border-red-500 placeholder:text-red-500'
                        : 'border-secondary/30'
                    }`}
                  placeholder="Enter Your OTP"
                  type="text"
                  name="otp"
                  id="otp"
                />
                <p className="text-red-500">{errors.otp?.message}</p>
              </div>

              {/* button */}
              <div className="flex items-center justify-center md:mt-6">
                <button
                  type="submit"
                  className={`transition flex items-center justify-center h-[42px] md:h-12 lg:h-14 duration-300 hover:bg-transparent hover:text-secondary py-2.5 md:py-3.5 lg:py-4 rounded-[24px] font-semibold bg-secondary border border-secondary text-white  w-full opacity-100`}
                >
                  <span>
                    {loading ? (
                      <CgSpinnerTwo className="size-6 animate-spin" />
                    ) : (
                      'Verify'
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

export default EmailVerification;
