import React from 'react';
import { Images } from '../../assets';
import Button from '../button/Button';

export const social = [
  {
    id: 1,
    link: 'https://www.facebook.com/kien.van321',
    image: Images.FACEBOOK,
  },
  {
    id: 2,
    link: '/',
    image: Images.YOUTUBE,
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/kienhv35/',
    image: Images.LINKEDIN,
  },
  {
    id: 4,
    link: 'https://github.com/KienHaVan',
    image: Images.GITHUB,
  },
];

function Banner({ section, contactItem }) {
  const handleNavigate = (section) => {
    let el = section.ref.current;

    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: el.offsetTop,
    });
  };

  return (
    <div
      className="pt-[132px] flex mobile:flex-col-reverse justify-center items-center relative tablet:mt-12 gap-6 mobile:pt-[96px]"
      id="home"
      ref={section.ref}
    >
      <div className="w-[500px] mobile:w-auto flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Hi, I'm Kevin</h1>
        <h2 className="text-xl font-bold">Software developer</h2>
        <h2 className="mb-8">
          High level experience in mobile and web design and development
          knowledge, producting quality work.
        </h2>
        <Button onClick={() => handleNavigate(contactItem)} />
      </div>
      <div>
        <img
          src={Images.AVATAR}
          className="rounded-full w-[400px] flex-shrink-0 mobile:w-[240px]"
          alt=""
        />
      </div>
      <div className="absolute left-0 flex flex-col gap-4 laptop:banner-social-laptop tablet:banner-social-tablet mobile:top-[212px] mobile:-translate-y-[50%] ">
        {social.map((item) => (
          <a href={item.link} key={item.id}>
            <img
              src={item.image}
              className="w-8 hover:scale-150 transition-all"
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Banner;
