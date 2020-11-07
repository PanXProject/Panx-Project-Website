import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby"
import spaceResearchIllustration from "../images/space-research-illustration.svg";
import spaceAdIllustration from "../images/space-ad-illustration.svg";
import seoSpaceExplorationIllustration from "../images/seo-space-exploration-illustration.svg";
import socialSpaceExploreIllustration from "../images/social-space-explore-illustration.svg";
import spaceSolutionIllustration from "../images/space-solution-illustration.svg";
import launchWebAppIllustration from "../images/launch-web-app-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `panx project`,
          `website development`,
          `ads campaign`,
          `digital solutions`,
        ]}
        title="Home"
      />

      <section className="text-center xl:flex-row">
        <img
          alt="Launch a Space Ad"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={spaceResearchIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Hello World!
        </h2>

        <p className="leading-loose">
          We explore the digital space and build solutions that make users
          click.{` `}
        </p>
        <br></br>
      </section>
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        {" "}
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={spaceAdIllustration}
        />
        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Ads Campaign
        </h2>
        <p className="leading-loose">We manage your first Ad for free.{` `}</p>
        <br></br>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Launch Ad
        </button>
        </Link>
      </section>
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        {" "}
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={socialSpaceExploreIllustration}
        />
        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Social Media Audit
        </h2>
        <p className="leading-loose">
          Audit your social profiles and get insights.{` `}
        </p>
        <br></br>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Get Audit
        </button>
        </Link>
      </section>
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        {" "}
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={seoSpaceExplorationIllustration}
        />
        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          SEO Report
        </h2>
        <p className="leading-loose">
          Manual website speed, performance, PWA and keywords reports.{` `}
        </p>
        <br></br>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Get Report
        </button>
        </Link>
      </section>
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        {" "}
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={spaceSolutionIllustration}
        />
        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Consultation
        </h2>
        <p className="leading-loose">Lost in digital space? Talk to us!{` `}</p>
        <br></br>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Book Session
        </button>
        </Link>
      </section>
      <br></br>
      <section className="bg-secondary max-w-screen-xl mx-8 lg:mx-auto py-24 px-8 rounded-lg shadow-2xl text-center md:bg-footer-cta bg-top bg-no-repeat">
        {" "}
        <img
          alt="Cat and human sitting on a couch"
          className="xl:w-1/4 block w-1/3 mx-auto mb-8"
          src={launchWebAppIllustration}
        />
        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-900 font-bold">
          Claim your online space
        </h2>
        <p className="leading-loose">
          Using Jamstack and Github sites build a free website.{` `}
        </p>
        <br></br>
        <Link to="/signup/">
        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Launch Site
        </button>
        </Link>
      </section>
    </Layout>
  );
}

export default IndexPage;
