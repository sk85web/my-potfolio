import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

const socialsIcons = [
  {
    path: 'https://github.com/sk85web',
    icon: <FaGithub />,
  },
  {
    path: 'http://www.linkedin.com/in/sergey-kovalev-a174002b5',
    icon: <FaLinkedin />,
  },
  {
    path: 'https://web.telegram.org/k/',
    icon: <FaTelegram />,
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socialsIcons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} className={iconStyles}>
            {icon.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
