'use client';

import { FiDownload } from 'react-icons/fi';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import { ParamsType } from '@/types';

const Home = () => {
  const t = useTranslations('Home');
  const params: ParamsType = useParams();

  return (
    <main>
      <section>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">{t('position')}</span>
              <h1 className="h1 mb-6">
                {t('greeting')} <br /> {t('name')}
                <span className="text-accent"> {t('lastName')}</span>
              </h1>
              <p className="max-w-[500px] text-white/80 mb-9">
                {t('description')}
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Link
                  href="/assets/CV_Sergey_Kovalev_Fronted_Developer_EN.pdf"
                  download
                >
                  <Button
                    variant={'outline'}
                    className="uppercase flex items-center gap-2"
                  >
                    {t('downloadCV')}
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>

                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="h-9 w-9 rounded-full flex justify-center items-center border border-accent text-base text-accent hover:bg-accent hover:text-primary hover:transition-all duration:300"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none">
              <Photo />
            </div>
          </div>
        </div>
      </section>
      <Stats currentLocale={params.locale} />
    </main>
  );
};

export default Home;
