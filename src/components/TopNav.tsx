import { useState } from "react";
import scrollToSection from "../util/scrollToSection";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              <img
                src="https://private-user-images.githubusercontent.com/67170897/541285525-589b9bb8-164a-4ca6-89f7-291012d13a41.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njk1NTA2NTIsIm5iZiI6MTc2OTU1MDM1MiwicGF0aCI6Ii82NzE3MDg5Ny81NDEyODU1MjUtNTg5YjliYjgtMTY0YS00Y2E2LTg5ZjctMjkxMDEyZDEzYTQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI3VDIxNDU1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlkZGIwOTQzNDQ3ZjY0NDA3YTdjZWRkZTA0MTJiMzcxOTY4ZWFlNDI1ZDUyZDk3MjhlNjQ5OGUxOWFmYWMxZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-vYXb-3yc8xZtU7dulLytQ5xxeer9AkcxwFB7BHWEg0"
                alt="Logo"
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-blue-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-white font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-3 py-2 text-white font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg font-medium mt-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
