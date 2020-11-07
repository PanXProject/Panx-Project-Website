import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/pinkcoffeemug.gif";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about panx`, `digital consultants`, `ads management`, `development outsourcing`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 leading-loose text-justify border-l-4 border-gray-900">
            A digital consultancy and community solutions organization. Each
            year we launch projects aimed to address a social, technological, or
            economical issue. Working with and training job seekers, startups,
            NGOs and enterprises on developing their own framework to leverage
            the latest industry standards and cutting-edge technology. Some of
            these clients include: Mumm, Zoho and Monginis.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Since 2018
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/4">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
