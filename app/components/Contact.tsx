import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold text-blue-300">Contact Information</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Email me with any questions or inquiries. We would be happy to answer your questions and set up a meeting with you.
        </p>
        <a href="mailto:noor.jsdivs@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Mail Me
          </button>
        </a>
      </div>
      
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink title="Linkedin" link="https://www.linkedin.com/" />
        <SocialLink title="Github" link="https://www.github.com/" />
        <SocialLink title="Twitter" link="https://www.twitter.com/" />
        <SocialLink title="Facebook" link="https://www.facebook.com/" />
      </div>
    </div>
  );
};

export default Contact;