import React from 'react';
import { IoMdClose } from 'react-icons/io';

const ModalSuccessSent = ({
  resetSend,
}: {
  resetSend: (val: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2">
      <div className="relative max-w-md w-full p-10 bg-[#27272c] rounded-[10px] text-white shadow-lg">
        <IoMdClose
          className="text-3xl text-accent absolute top-2 right-2 hover:text-accent-hover transition-colors cursor-pointer"
          onClick={() => resetSend(false)}
          aria-label="Close"
        />
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Your message has been sent{' '}
          <span className="text-accent">successfully!</span>
        </h2>
        <p className="text-center text-white/70">
          I’ll answer you as soon as possible. Thank you for reaching out!
        </p>
      </div>
    </div>
  );
};

export default ModalSuccessSent;
