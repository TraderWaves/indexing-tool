import { unstable_setRequestLocale } from 'next-intl/server';

import { Navbar } from '@/components/Navbar';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* <DemoBanner /> */}
      <Navbar />
      {props.children}
    </div>
  );
}
