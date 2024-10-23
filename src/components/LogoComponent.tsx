import type { FirmName } from '@/types/firmTypes';

import firmLogos from './icons/company/firmLogos';

export const LogoComponent = ({ firm }: { firm: FirmName }) => {
  return (
    <div>
      {firmLogos[firm]}
    </div>
  );
};
