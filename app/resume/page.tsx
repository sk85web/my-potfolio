'use client';

import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import MotionSection from '@/components/MotionSection';

const about = {
  title: 'About me',
  description:
    'Explore my professional journey in frontend development, where I have built strong skills in HTML, CSS, JavaScript, React, Redux, Next.js, Tailwind CSS. My focus is on creating optimized, responsive, and user-friendly web applications.',
  info: [
    { fieldName: 'Name', fieldValue: 'Sergey Kovalev' },
    { fieldName: 'Phone', fieldValue: '+375(29) 706 81 80' },
    { fieldName: 'Experience', fieldValue: '1+ Years' },
    { fieldName: 'Skype', fieldValue: 'live:9a5cf545f80ae1a7' },
    { fieldName: 'Email', fieldValue: 'sk85post@gmail.com' },
    { fieldName: 'Languages', fieldValue: 'English, Russian' },
  ],
};

const experience = {
  icon: '',
  title: 'My experience - education',
  description:
    'Continually advancing my frontend development skills with a focus on React, Next.js, TypeScript. Proficient in modern tools and design patterns, creating maintainable code and enhancing user experience in every project.',
  items: [
    {
      company: 'T1 Group',
      position: 'Frontend Developer - Graduate',
      duration: '09.2024 - 10.2024',
    },
    {
      company: 'The Rolling Scopes',
      position: 'React Developer - Graduate',
      duration: '07.2024 - 09.2024',
    },
    {
      company: 'TeachMeSkills',
      position: 'Frontend Developer - Graduate',
      duration: '10.2023 - 06.2024',
    },
    {
      company: 'The Rolling Scopes',
      position: 'Frontend Developer - Graduate',
      duration: '09.2023 - 05.2024',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'Experienced in developing responsive, interactive web interfaces using HTML, CSS, JavaScript, TypeScript. Skilled in modern frameworks and libraries, including React, Next.js, Redux, and Tailwind CSS, with an emphasis on optimized, scalable solutions.',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiRedux />,
      name: 'redux',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },
  ],
};

const Resume = () => {
  return (
    <MotionSection>
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full gap-6 max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillsList.map((skill, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-[5px] flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, ind) => {
                    return (
                      <li
                        key={ind}
                        className="flex items-center justify-center xl:justify-start gap-4 flex-col sm:flex-row"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </MotionSection>
  );
};

export default Resume;
