import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Contact from '@/components/Contact';
import { DataTable } from '@/components/DataTable';
import FeaturesList from '@/components/FeaturesList';
import Footer from '@/components/Footer';
import { FormFilter } from '@/components/FormFilter';
import { Hero } from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Index = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');

  return (
    <div className="pt-20">
      <Hero />
      <div className="mt-20 flex flex-col gap-20 p-5">
        <section id="compare">
          <FormFilter />
        </section>
        <LogoCarousel />
        <section id="props-table">
          <DataTable />
        </section>
        <section id="features">
          <FeaturesList />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
