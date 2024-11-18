import { CgSpinnerTwo } from 'react-icons/cg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // function:

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      toast.success(`ezz`);
      navigate('/email-verification');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full flex h-screen bg-primary/50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-secondary/50 w-[573px] py-10 shadow-lg">
          <div className="text-center mt-10 ">
            <h3 className="font-primaryBold text-2xl">Reset Your Password</h3>
          </div>
          <div className="flex items-center justify-center mt-5">
            <p className="flex gap-2 items-center py-2 w-2/3 mx-auto text-center font-primaryMedium text-secondary">
              Enter your email or phone number to get back into your account
            </p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-4 font-primaryTest">
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
                  className={`w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]
                    ${
                      errors.email?.message
                        ? 'border-red-500 placeholder:text-red-500'
                        : 'border-secondary/30'
                    }`}
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  id=""
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>

              {/* button */}
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className={`transition flex items-center justify-center h-14 duration-300 hover:bg-transparent hover:text-[#666633] py-4 rounded-[24px] font-semibold bg-secondary border border-secondary text-white  w-full opacity-100`}
                >
                  <span>
                    {loading ? (
                      <CgSpinnerTwo className="size-6 animate-spin" />
                    ) : (
                      'Continue'
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

export default ResetPassword;
