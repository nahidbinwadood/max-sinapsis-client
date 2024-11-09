import {
  EmailSvg,
  LocationSvg,
  PhoneSvg,
  TelephoneSvg,
} from '../components/SvgContainer';
import Title from '../components/Title';

const Contact = () => {
  return (
    <section className="pb-32">
      <Title title="contact" />

      {/* contact form */}
      <div className="mt-10 flex gap-6">
        {/* left side */}
        <div className="w-[30%] h-fit pb-16 bg-secondary rounded-lg p-8 text-white font-primaryTest tracking-wider flex flex-col gap-6">
          <div className="flex gap-5 ">
            <LocationSvg />
            <div className="text-lg">
              <p>Ana Laura Vargas</p>
              <p>P.O. Box 3016-1000</p>
              <p>San José, Costa Rica</p>
            </div>
          </div>
          <div className="flex gap-5 text-lg items-center">
            <PhoneSvg />
            <div>
              <a href="tel:+(506) 2289-7141">+(506) 2289-7141</a>
            </div>
          </div>
          <div className="flex gap-5 text-lg items-center">
            <TelephoneSvg />
            <div>
              <a href="tel:+(506) 7017-7472">+(506) 7017-7472</a>
            </div>
          </div>
          <div className="flex gap-5 text-lg items-center">
            <EmailSvg />
            <div>
              <a href="mailto:alaura@projectartwork.com">
                alaura@projectartwork.com
              </a>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="px-9 py-10 border-2 border-secondary rounded-lg w-[70%] font-primaryTest tracking-wider">
          <p className="text-lg">
            Please contact us using the information at left, or complete this
            form, and we will get back to you as soon as possible. Thanks!!
          </p>
          <form action="" className="mt-7 w-full space-y-4">
            <div>
              <input
                required
                placeholder="Enter Your Name*"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Telephone"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="number"
                name="telephone"
                id=""
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Address"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="text"
                name="address"
                id=""
              />
            </div>
            <div>
              <input
                placeholder="Enter Your City"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="text"
                name="city"
                id=""
              />
            </div>
            <div>
              <input
                placeholder="Enter Your State"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="text"
                name="state"
                id=""
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Zip"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="number"
                name="zip"
                id=""
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Country"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="text"
                name="country"
                id=""
              />
            </div>
            <div>
              <input
                required
                placeholder="Enter Your Email*"
                className="w-full border border-secondary rounded-lg px-5 py-3.5 focus:outline-none"
                type="email"
                name="email"
                id=""
              />
            </div>
            <div>
              <textarea
                rows={5}
                className="border border-secondary rounded-lg px-6 py-5 w-full focus:outline-none"
                placeholder="Enter Your Message"
                name="message"
                id=""
              ></textarea>
            </div>
            <div className="pt-5">
              <button type="submit" className='bg-secondary py-3.5 text-white w-full rounded-lg border border-secondary hover:bg-transparent hover:text-secondary transition duration-500'>Contact</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
