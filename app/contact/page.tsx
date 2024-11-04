'use client';

import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import ModalSuccessSent from '@/components/ModalSuccessSent';
import MotionSection from '@/components/MotionSection';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+375(29) 706 81 80',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'sk85post@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: 'Belarus, Minsk',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [sent, setIsSent] = useState(false);

  const validateForm = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact_number = Math.floor(Math.random() * 10000);

    if (!validateForm()) {
      setError('Please fill in all fields');
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          contact_number: contact_number,
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          message: formData.message,
        },
        userId
      )
      .then(() => {
        setIsSent(true);
      })
      .catch((error) => {
        console.error('Email send error:', error);
      });
  };

  return (
    <MotionSection>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h1 className="text-accent text-4xl">Let&apos;s work together</h1>
              {error ? (
                <p className="text-red-400" role="alert">
                  {error}
                </p>
              ) : (
                <p className="text-white/60">Please fill out the form below.</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  aria-required="true"
                />
                <label htmlFor="lastName" className="sr-only">
                  Last name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  aria-required="true"
                />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Phone number"
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type your message here..."
                onChange={handleChange}
                aria-required="true"
                aria-describedby="messageHelp"
              ></Textarea>
              <p id="messageHelp" className="sr-only">
                Describe your message here.
              </p>

              <Button className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-[10px] flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-[1rem] mini:text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {sent && <ModalSuccessSent resetSend={setIsSent} />}
    </MotionSection>
  );
};

export default Contact;
