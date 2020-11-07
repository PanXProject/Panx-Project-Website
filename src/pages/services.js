import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import digitalServicesIllustration from "../images/digital-services-illustration1.svg";
import digitalServicesIllustration2 from "../images/digital-services-illustration2.svg";
import digitalServicesIllustration3 from "../images/digital-services-illustration3.svg";
import digitalServicesIllustration4 from "../images/digital-services-illustration4.svg";
import digitalServicesIllustration5 from "../images/digital-services-illustration5.svg";
import digitalServicesIllustration6 from "../images/digital-services-illustration6.svg";
import { Link } from "gatsby"

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`panx project`, `ads`, `digital ads`, `digital consultancy`]}
        title="Home"
      />

      <section className="text-center xl:flex-row">
        <img
          alt="Launch a Space Ad"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={digitalServicesIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Digital Services
        </h2>

        <p className="leading-loose">
        Making tech accessible and user friendly.{` `}
        </p>
      </section>
      <br></br>

      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={digitalServicesIllustration2}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Research and Consult
        </h2>

        <p className="leading-loose">
        Research competitors, analyze market trends and opportunites.{` `}
        </p>
        <br></br>
        <Link to="/start/">
          <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Start Now
          </button>
        </Link>
        <br></br>
      </section>

      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={digitalServicesIllustration3}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Design and Develop
        </h2>

        <p className="leading-loose">
          Get brand, UI/UX designed on your favorite tech stack.{` `}
        </p>
        <br></br>
        <Link to="/start/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Let&apos;s Talk
        </button>
        </Link>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-gray-900 bg-white border-b-4 border border-gray-700 rounded hover:border-gray-600 hover:bg-gray-500">
          Free Website
        </button>
        </Link>
      </section>
      
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={digitalServicesIllustration4}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Deploy and Host
        </h2>

        <p className="leading-loose">
        No-click setup, install and host as a services.{` `}
        </p>
        <br></br>
        <Link to="/start/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Deploy App
        </button>
        </Link>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-gray-900 bg-white border-b-4 border border-gray-700 rounded hover:border-gray-600 hover:bg-gray-500">
          Free Setup
        </button>
        </Link>
        <br></br>
      </section>
      
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={digitalServicesIllustration5}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
           Training and Workshops
        </h2>

        <p className="leading-loose">
        Advance your Digital Sales, Marketing and Tech skills.{` `}
        </p>
        <br></br>
        <Link to="/start/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Learn Online
        </button>
        </Link>
        <br></br>
      </section>
      
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={digitalServicesIllustration6}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Digital Marketing
        </h2>

        <p className="leading-loose">
        Launch successful digital marketing campaigns.{` `}
        </p>
        <br></br>
        <Link to="/start/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Launch Now
        </button>
        </Link>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-gray-900 bg-white border-b-4 border border-gray-700 rounded hover:border-gray-600 hover:bg-gray-500">
          Free Audit
        </button>
        </Link>
        <br></br>
      </section>

    </Layout>
  );
}

export default ServicesPage;
