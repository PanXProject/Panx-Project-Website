import PropTypes from "prop-types";
import React from "react";
import panxLongIllustration from "../images/panx-long-illustration.svg";
import { Link } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col felx-row min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-white">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-gray-900">
            <Link to="/">
            <img
              alt="Launch a Space Ad"
              className="object-contain h-10 w-16"
              src={panxLongIllustration}
            />
            </Link>
            Created by{` `}
            <Link to="/about/" className="font-bold no-underline">
              Panx Project
            </Link>
          </p>

          <p>
            <a
              className="font-bold text-gray-900 no-underline"
              href="https://wa.me/201006844144"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
