import React from "react";

const CONSTANTS = {
  INSTAGRAM: 'https://www.instagram.com/maxyermayank/'
}

export function SocialBar() {
  function openInstagram() {
    window.open(CONSTANTS.INSTAGRAM, '_blank')?.focus();
  }

  return <div className='w-full	flex flex-row justify-end my-3'>
    <img onClick={openInstagram} height="32" width="32" className="social-icon"
         src="https://unpkg.com/simple-icons@v5/icons/instagram.svg" alt='instagram'/>
  </div>;
}
