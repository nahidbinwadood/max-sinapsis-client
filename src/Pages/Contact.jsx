import { useState } from 'react';
import {
  EmailSvg,
  LocationSvg,
  PhoneSvg,
  TelephoneSvg,
} from '../components/SvgContainer';
import Title from '../components/Title';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';

const formNames = [
  {
    name: 'full_name',
    value: '',
    placeholder: 'Enter Your Name*',
    spanish: 'Ingrese su nombre*',
    type: 'text',
  },
  {
    name: 'telephone',
    value: '',
    placeholder: 'Enter Your Telephone',
    spanish: 'Ingrese su teléfono',
    type: 'tel',
  },
  {
    name: 'address',
    value: '',
    placeholder: 'Enter Your Address',
    spanish: 'Ingrese su dirección',
    type: 'text',
  },
  {
    name: 'city',
    value: '',
    placeholder: 'Enter Your City',
    spanish: 'Ingrese su ciudad',
    type: 'text',
  },
  {
    name: 'state',
    value: '',
    placeholder: 'Enter Your State',
    spanish: 'Ingrese su estado',
    type: 'text',
  },
  {
    name: 'zip',
    value: '',
    placeholder: 'Enter Your Zip',
    spanish: 'Ingrese su código postal',
    type: 'number',
  },
  {
    name: 'country',
    value: '',
    placeholder: 'Enter Your Country',
    spanish: 'Ingrese su país',
    type: 'text',
  },
  {
    name: 'email',
    value: '',
    placeholder: 'Enter Your Email*',
    spanish: 'Ingrese su correo electrónico*',
    type: 'email',
  },
  {
    name: 'message',
    value: '',
    placeholder: 'Enter Your Message',
    spanish: 'Ingrese su mensaje',
    type: 'textarea',
  },
];

const Contact = () => {
  const { isSpanish } = useAuth();
  const [formData, setFormData] = useState(formNames);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const fetchInfo = async () => {
    const { data } = await axiosPublic('/getcontact-address');
    return data?.data;
  };
  //fetch contact information:
  const {
    data: contactInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['contactInfo'],
    queryFn: () => fetchInfo(axiosPublic),
    staleTime: Infinity, // Cache indefinitely (data won't refetch automatically)
    cacheTime: Infinity, // Cache persists indefinitely
    retry: 1, // Retry once on failure
  });

  const locationArray = contactInfo?.location.split('\\n');

  // Define the mutation for form submission
  const { mutate } = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosPublic.post('/send-message', formData);
      return response.data;
    },
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) =>
      prevData.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataObject = formData.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    console.log('Form Data:', dataObject);

    try {
      mutate(dataObject);
      setLoading(false);
      toast.success('Message sent successfully');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title={'contact'} spanish={'Contacto'} />

      {/* Contact Information and Form */}
      <div className="mt-5 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-6">
        {/* Left Side: Contact Info */}
        <div className="md:w-[40%] xl:w-[30%] h-fit lg:pb-16 bg-secondary rounded-lg p-5 xl:p-8 text-white font-primaryTest tracking-wider flex flex-col gap-3 md:gap-6">
          <div className="flex gap-3 md:gap-5">
            <LocationSvg />
            <div className="text-sm md:text-base ">
              {locationArray?.map((location) => (
                <p key={location}>{location}</p>
              ))}
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 text-sm md:text-base   items-center">
            <PhoneSvg />
            <a href={`tel:${contactInfo?.telephone}`}>
              {contactInfo?.telephone}
            </a>
          </div>
          <div className="flex gap-3 md:gap-5 text-sm md:text-base  items-center">
            <TelephoneSvg />
            <a href={`tel:${contactInfo?.mobile}`}>{contactInfo?.mobile}</a>
          </div>
          <div className="flex gap-3 md:gap-5 text-sm md:text-base items-center">
            <div className="flex-shrink-0">
              <EmailSvg />
            </div>
            <a href="mailto:alaura@projectartwork.com">{contactInfo?.email}</a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="px-6 py-6 md:px-7 md:py-8 lg:px-8 2xl:px-9 2xl:py-10 border-2 border-secondary rounded-lg md:w-[60%] lg:w-[70%] font-primaryTest tracking-wider">
          <p className="text-sm md:text-base lg:text-lg">
            {!isSpanish
              ? 'Please contact us using the information on the left, or complete this form, and we will get back to you as soon as possible. Thanks!'
              : 'Comuníquese con nosotros utilizando la información a la izquierda o complete este formulario y nos comunicaremos con usted lo antes posible. ¡Gracias!'}
          </p>
          <form onSubmit={handleSubmit} className="mt-7 w-full space-y-4">
            {formData.map((field) => (
              <div key={field.name}>
                {field.type === 'textarea' ? (
                  <textarea
                    rows={5}
                    className="border border-secondary text-sm md:text-base rounded-lg px-6  py-4 md:py-5 w-full focus:outline-none"
                    placeholder={!isSpanish ? field.placeholder : field.spanish}
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    required={
                      field.name === 'full_name' || field.name === 'email'
                    }
                    className="w-full border text-sm md:text-base border-secondary rounded-lg px-5 py-2.5 md:py-3.5 focus:outline-none"
                    placeholder={!isSpanish ? field.placeholder : field.spanish}
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <div className="md:pt-5">
              <button
                type="submit"
                className="bg-secondary py-2.5 md:py-3.5 text-white w-full rounded-lg border border-secondary hover:bg-transparent hover:text-secondary transition duration-500"
              >
                {loading ? (
                  <ImSpinner9 className="size-6 animate-spin" />
                ) : isSpanish ? (
                  'Enviar'
                ) : (
                  'Contact'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
