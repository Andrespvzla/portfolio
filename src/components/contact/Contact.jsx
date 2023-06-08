import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const form = useRef();
  const notifySuccess = () =>
    toast.success('You successfully send an email.', {
      position: 'bottom-center',
      id: 'contact-email',
    });
  const notifyError = () =>
    toast.error('There was an error, try again.', {
      position: 'bottom-center',
      id: 'contact-email',
    });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e6o3ars',
        'template_08zcpfc',
        form.current,
        '2BxQgC_Cz3X6pomFI'
      )
      .then(
        () => {
          notifySuccess();
          e.target.reset();
        },
        () => {
          notifyError();
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-10 lg:pb-24"
    >
      <h2 className="section__title">Get in Touch</h2>
      <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-3">
        <div className="ml-1">
          <h3 className="text-indigo-500 text-xl font-bold mb-2">
            Let&apos;s talk about some projects!
          </h3>
          <p className="text-gray-500 mb-8">Just send me an email. 👋</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="col-span-2">
          <div className="grid gap-x-6 grid-cols-1 lg:grid-cols-2">
            <div className="relative mb-7 h-14">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Write your name"
                required
              />
            </div>
            <div className="relative mb-7 h-14">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Write your email"
                required
              />
            </div>
          </div>
          <div className="relative mb-7 h-14">
            <input
              type="text"
              name="subject"
              className="input"
              placeholder="What's the subject?"
              required
            />
          </div>
          <div className="relative mb-7 h-36">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="input resize-none"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
        <Toaster />
      </div>
    </section>
  );
};
