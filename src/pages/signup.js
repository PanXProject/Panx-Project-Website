import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function SignUpPage() {
  return (
    <Layout>
      <SEO
        keywords={[`free ads`, `free website`, `seo reports`, `digital marketing`]}
        title="Sign Up"
      />
      <section>
        <form
          className="mx-auto md:w-1/2"
          action="https://formspree.io/f/xknpbaov"
          method="POST"
        >
          <p className="mb-8 leading-loose">
            Choose from the free services down below, no payments or credit card
            required. Kindly note you can only choose up to one service.{` `}
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Joan"
            type="text"
            name="first-name"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="last-name"
            placeholder="Linn"
            type="text"
            name="last-name"
          />
          <label
            className="block felx-row mb-2 text-xs font-bold uppercase"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="w-full mb-6 form-input"
            id="email"
            placeholder="your.email@example.com"
            type="email"
            name="email"
          />

          <label
            className="block tracking-wide text-xs font-bold uppercase mb-2"
            htmlFor="subject"
          >
            Request a service
          </label>

          <select
            className="w-full mb-6 form-input leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            name="subject"
          >
            <option>Free Ad Campaign</option>
            <option>Social Profiles Audit</option>
            <option>SEO Report</option>
            <option>Consultation Session</option>
            <option>Free Website</option>
          </select>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            rows="8"
            name="message"
          />

          <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default SignUpPage;
