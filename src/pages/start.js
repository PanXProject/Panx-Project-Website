import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function StartService() {
  return (
    <Layout>
      <SEO
        keywords={[`panx project`, `request service`, `request consultation`, `digital solutions`]}
        title="Start XaaS"
      />
      <section>
        <form
          className="mx-auto md:w-1/2"
          action="https://formspree.io/f/mjvprjqj"
          method="POST"
        >
          <p className="mb-8 leading-loose">
            We love to be part of your digital journey. Select the service you&apos;d like us to help with and use the message box to describe your projects details.{` `}
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
            About
          </label>

          <select
            className="w-full mb-6 form-input leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            name="subject"
          >
            <option>Digital Marketing</option>
            <option>Design and Development</option>
            <option>App and Cloud Hosting</option>
            <option>Training and Workshops</option>
            <option>Research and Consultation</option>
            <option>Documents Creation</option>
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

export default StartService;
