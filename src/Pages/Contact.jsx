import { useEffect, useState } from 'react';
import {
  EmailSvg,
  LocationSvg,
  PhoneSvg,
  TelephoneSvg,
} from '../components/SvgContainer';
import Title from '../components/Title';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const formNames = [
  {
    name: 'full_name',
    value: '',
    placeholder: 'Enter Your Name*',
    type: 'text',
  },
  {
    name: 'telephone',
    value: '',
    placeholder: 'Enter Your Telephone',
    type: 'tel',
  },
  {
    name: 'address',
    value: '',
    placeholder: 'Enter Your Address',
    type: 'text',
  },
  { name: 'city', value: '', placeholder: 'Enter Your City', type: 'text' },
  { name: 'state', value: '', placeholder: 'Enter Your State', type: 'text' },
  { name: 'zip', value: '', placeholder: 'Enter Your Zip', type: 'number' },
  {
    name: 'country',
    value: '',
    placeholder: 'Enter Your Country',
    type: 'text',
  },
  { name: 'email', value: '', placeholder: 'Enter Your Email*', type: 'email' },
  {
    name: 'message',
    value: '',
    placeholder: 'Enter Your Message',
    type: 'textarea',
  },
];

const Contact = () => {
  const { isSpanish } = useAuth();
  const [formData, setFormData] = useState(formNames);
  const axiosPublic = useAxiosPublic();

  // Fetch contact address on mount
  useEffect(() => {
    const fetchContactAddress = async () => {
      try {
        const { data } = await axiosPublic.get('/getcontact-address');
        setFormData((prevData) =>
          prevData.map((field) => ({
            ...field,
            value: data[field.name] || field.value, // Prefill with fetched data
          }))
        );
      } catch (error) {
        console.error('Error fetching contact address:', error);
      }
    };

    fetchContactAddress();
  }, [axiosPublic]);

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

    const dataObject = formData.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    console.log('Form Data:', dataObject);

    try {
     // const response = await axiosPublic.post('/submit-contact', dataObject);
   //   console.log('Form submitted successfully:', response.data);
    } catch (error) {
     // console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="pb-32">
      <Title title={isSpanish ? 'Contacto' : 'Contact'} />

      {/* Contact Information and Form */}
      <div className="mt-10 flex gap-6">
        {/* Left Side: Contact Info */}
        <div className="w-[30%] h-fit pb-16 bg-secondary rounded-lg p-8 text-white font-primaryTest tracking-wider flex flex-col gap-6">
          <div className="flex gap-5">
            <LocationSvg />
            <div className="text-lg">
              <p>Ana Laura Vargas</p>
              <p>P.O. Box 3016-1000</p>
              <p>San José, Costa Rica</p>
            </div>
          </div>
          <div className="flex gap-5 text-lg items-center">
            <PhoneSvg />
            <a href="tel:+(506) 2289-7141">+(506) 2289-7141</a>
          </div>
          <div className="flex gap-5 text-lg items-center">
            <TelephoneSvg />
            <a href="tel:+(506) 7017-7472">+(506) 7017-7472</a>
          </div>
          <div className="flex gap-5 text-lg items-center">
            <EmailSvg />
            <a href="mailto:alaura@projectartwork.com">
              alaura@projectartwork.com
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="px-9 py-10 border-2 border-secondary rounded-lg w-[70%] font-primaryTest tracking-wider">
          <p className="text-lg">
            Please contact us using the information on the left, or complete
            this form, and we will get back to you as soon as possible. Thanks!
          </p>
          <form onSubmit={handleSubmit} className="mt-7 w-full space-y-4">
            {formData.map((field) => (
              <div key={field.name}>
                {field.type === 'textarea' ? (
                  <textarea
                    rows={5}
                    className="border border-secondary rounded-lg px-6 py-5 w-full focus:outline-none"
                    placeholder={field.placeholder}
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    required={
                      field.name === 'full_name' || field.name === 'email'
                    }
                    className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                    placeholder={field.placeholder}
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <div className="pt-5">
              <button
                type="submit"
                className="bg-secondary py-3.5 text-white w-full rounded-lg border border-secondary hover:bg-transparent hover:text-secondary transition duration-500"
              >
                {isSpanish ? 'Enviar' : 'Contact'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
