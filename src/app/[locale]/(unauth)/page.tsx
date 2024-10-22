import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { DataTable } from '@/components/DataTable';
import { Hero } from '@/components/Hero';

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
      <div className="mt-20 p-5">
        <DataTable />
      </div>
    </div>
  );
};

export default Index;
