import { useFormik } from 'formik';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Phone_Number: '',
      Subject: '',
      Message: '',
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20 mb-20">
        <h1 className="text-3xl font-bold text-gray-800 text-center font-kuchbhi mb-6">Contact Us!</h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="Name" className="text-sm font-semibold text-gray-600">
              Name <i className="bi bi-person"></i>
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Your Name"
              className="mt-1 px-3 py-2 border font-kuchbhi border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
              onChange={formik.handleChange}
              value={formik.values.Name}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Email" className="text-sm font-semibold font-kuchbhi text-gray-600">
              Email <i className="bi bi-envelope"></i>
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Your Email"
              className="mt-1 px-3 py-2 border font-kuchbhi border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
              onChange={formik.handleChange}
              value={formik.values.Email}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Phone_Number" className="text-sm font-kuchbhi font-semibold text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="Phone_Number"
              name="Phone_Number"
              placeholder="Your Phone Number"
              className="mt-1 px-3 py-2 border border-gray-300 font-kuchbhi rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
              onChange={formik.handleChange}
              value={formik.values.Phone_Number}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Subject" className="text-sm font-semibold font-kuchbhi text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="Subject"
              name="Subject"
              placeholder="Subject"
              className="mt-1 px-3 py-2 border border-gray-300 font-kuchbhi rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
              onChange={formik.handleChange}
              value={formik.values.Subject}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Message" className="text-sm font-kuchbhi font-semibold text-gray-600">
              Message
            </label>
            <textarea
              id="Message"
              name="Message"
              rows="4"
              placeholder="Your Message"
              className="mt-1 px-3 py-2  border font-kuchbhi border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
              onChange={formik.handleChange}
              value={formik.values.Message}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-2xl font-kuchbhi text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};




export default Contact