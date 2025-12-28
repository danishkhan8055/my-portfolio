import { memo } from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8839806126" // ✅ Correct WhatsApp format (no spaces, no +)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out animate-bounce">
        <img
          src="./whatsApplogo.png"
          alt="WhatsApp"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-pulse"
          loading="lazy"
        />
      </div>
    </a>
  );
};

export default memo(WhatsAppButton);


// let logoUrl = "https://cdn-icons-png.flaticon.com/512/220/220236.png"