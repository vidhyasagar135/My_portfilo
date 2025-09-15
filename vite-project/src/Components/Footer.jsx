import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaLinkedinIn, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center text-gray-900">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold mb-3">Let's Work Together</h2>
        <p className="text-gray-600">
          Ready to start your next project? I'd love to hear about your ideas and help bring them to life.
        </p>
      </div>

      {/* Contact Card */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md text-left">
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

          {/* Contact Items */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 text-lg mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600 text-sm">vvidhyasagar135@email.com</p>
              </div>
            </div>

            {/* <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 text-lg mr-4">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              </div>
            </div> */}

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 text-lg mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600 text-sm">Warangal Telangana</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 text-lg mr-4">
                <FaClock />
              </div>
              <div>
                <h4 className="font-medium">Response Time</h4>
                <p className="text-gray-600 text-sm">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <h4 className="mt-10 mb-4 font-medium">Connect on Social</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
            <FaLinkedinIn />
</a>

            <a href="https://github.com/vidhyasagar135" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
              <FaGithub />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
