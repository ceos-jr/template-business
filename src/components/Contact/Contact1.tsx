import ExportedImage from "next-image-export-optimizer";

const Contact1 = () => {
  return (
    <section className="container grid grid-cols-1 gap-8 place-items-center p-8 py-16 mx-auto md:grid-cols-2">
      <div className="relative w-full h-80 md:h-full">
        <ExportedImage
          src="images/contact/bg1.svg"
          alt="contact image"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex flex-col gap-8 text-gray-800">
        <h2 className="text-lg font-semibold text-primary-600">Talk with us</h2>
        <h1 className="text-3xl">
          Get a <span className="font-bold">Free</span> Project Evaluation
          Today!
        </h1>
        <p className="font-light">
          Tell us about your project and we will evaluate it for free. Our team
          of experts will provide you with a comprehensive analysis and
          recommendations.
        </p>
        <form>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              className="floating-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="floating-label">
              Email
            </label>
          </div>{" "}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="name"
              id="name"
              className="floating-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="floating-label">
              Name
            </label>
          </div>{" "}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="tel"
              id="tel"
              className="floating-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="tel" className="floating-label">
              Telephone
            </label>
          </div>{" "}
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              name="message"
              id="message"
              className="floating-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="message" className="floating-label">
              Message
            </label>
          </div>{" "}
          <button
            type="submit"
            className="py-2 w-full text-sm text-white rounded-full transition-colors bg-primary-600 hover:bg-primary-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact1;
