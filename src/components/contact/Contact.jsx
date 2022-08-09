import React from "react";

const Contact = () => {
  return (
    <section className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-10 lg:pb-24">
      <h2 className="section__title">Get in Touch</h2>
      <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-3">
        <div>
          <h3 className="text-indigo-500 text-xl font-bold mb-2">
            Let's talk about bla bla bla!
          </h3>
          <p className="text-gray-500 mb-3">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form action="" className="col-span-2">
          <div className="grid gap-x-6 grid-cols-1 lg:grid-cols-2">
            <div className="relative mb-7 h-14">
              <input
                type="text"
                className="input"
                placeholder="Write your name"
              />
            </div>
            <div className="relative mb-7 h-14">
              <input
                type="email"
                className="input"
                placeholder="Write your email"
              />
            </div>
          </div>
          <div className="relative mb-7 h-14">
            <input
              type="text"
              className="input"
              placeholder="What's the subject?"
            />
          </div>
          <div className="relative mb-7 h-36">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="input resize-none"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
