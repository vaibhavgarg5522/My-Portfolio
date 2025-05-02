import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaSkype,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    id: 1,
    label: 'WhatsApp',
    icon: <FaWhatsapp size={18} />,
    href: 'https://wa.me/918218390981',
    color: 'bg-[#25D366]'
  },
  {
    id: 2,
    label: 'Instagram',
    icon: <FaInstagram size={18} />,
    href: 'https://www.instagram.com/masoom_____bacha_____/',
    color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
  },
  {
    id: 3,
    label: 'GitHub',
    icon: <FaGithub size={18} />,
    href: 'https://github.com/vaibhavgarg5522',
    color: 'bg-[#333]'
  },
  {
    id: 4,
    label: 'X (Twitter)',
    icon: <FaXTwitter size={18} />,
    href: 'https://x.com/vaibhavgarg5522?t=H5maR-6fEwgZef00HQhfQA&s=09',
    color: 'bg-black'
  },
  {
    id: 5,
    label: 'Skype',
    icon: <FaSkype size={18} />,
    href: 'skype:+918218390981?call',

    color: 'bg-[#00AFF0]'
  }
];

const SocialIconsBar = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id, href) => {
    setActiveId(id);
    window.open(href, '_blank');
  };

  return (
    <div className="fixed top-[12%] right-0 z-50 flex flex-col items-end space-y-2">
      {socialLinks.map(({ id, label, icon, href, color }) => (
        <div
          key={id}
          onClick={() => handleClick(id, href)}
          onMouseEnter={() => setActiveId(id)}
          onMouseLeave={() => setActiveId(null)}
          className={`group relative flex items-center w-[24px] md:w-[32px] hover:w-[140px] transition-all duration-500 ease-in-out text-white ${color} overflow-hidden cursor-pointer`}
        >
          <div className="p-1 md:p-2">{icon}</div>
          <span
            className={`absolute right-3 transition-all duration-500 text-sm whitespace-nowrap ${
              activeId === id ? 'opacity-100 right-[45px]' : 'opacity-0'
            } group-hover:opacity-100 group-hover:right-[45px]`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocialIconsBar;
