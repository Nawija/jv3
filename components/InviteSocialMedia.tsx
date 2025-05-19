"use client";

import React from "react";

type InviteSocialMediaProps = {
  text: string;
  textColor?: string; // np. "text-white", "text-black", "text-red-500"
};

const InviteSocialMedia: React.FC<InviteSocialMediaProps> = ({
  text,
  textColor = "text-white",
}) => {
  return (
    <div className={`text-lg lg:text-xl flex items-center justify-center pt-20 gap-2 ${textColor}`}>
      <p className="font-medium">{text}</p>
      <div className="flex gap-2">
        <a
          href="https://www.facebook.com/twojprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 3h-2.4v7A10 10 0 0 0 22 12Z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/twojprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InviteSocialMedia;
