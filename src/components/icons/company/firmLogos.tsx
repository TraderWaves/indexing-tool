import type { FirmName } from '@/types/firmTypes';

import AlphaCapitalGroup from './AlphaCapitalGroup';
import ApexTraderFunding from './ApexTraderFunding';
import AquaFunded from './AquaFunded';
import AudacityCapital from './AudacityCapital';
import BlueberryFunded from './BlueberryFunded';
import Breakout from './Breakout';
import CFTLogo from './CFT';
import CityTradersImperium from './CityTradersImperium';
import E8Markets from './E8Markets';
import Earn2Trade from './Earn2Trade';
import FinotiveFunding from './FinotiveFunding';
import ForTraders from './ForTraders';
import FTM from './FTM';
import FundedNext from './FundedNext';
import FundedTradingPlus from './FundedTradingPlus';
import FundingPips from './FundingPips';
import FundingTraders from './FundingTraders';
import Fxify from './Fxify';
import GoatFundedTrader from './GoatFundedTrader';
import InstantFunding from './InstantFunding';
import LarkFunding from './LarkFunding';
import MentFunding from './MentFunding';
import MyFundedFX from './MyFundedFX';
import QuantTekel from './QuantTekel';
import The5Percenters from './The5Percenters';
import TheTradingPit from './TheTradingPit';
import Topstep from './Topstep';
import TradeDay from './TradeDay';
import TradeThePool from './TradeThePool';

const firmLogos: Record<FirmName, JSX.Element> = {
  'Alpha Capital Group': <AlphaCapitalGroup width={50} height={50} />,
  'Apex Trader Funding': <ApexTraderFunding width={50} height={50} />,
  'Aqua Funded': <AquaFunded width={50} height={50} />,
  'Audacity Capital': <AudacityCapital width={50} height={50} />,
  'Blueberry Funded': <BlueberryFunded width={50} height={50} />,
  'Breakout': <Breakout width={50} height={50} />,
  'CFT': <CFTLogo width={50} height={50} />,
  'City Traders Imperium': <CityTradersImperium width={50} height={50} />,
  'E8Markets': <E8Markets width={50} height={50} />,
  'Earn2Trade': <Earn2Trade width={50} height={50} />,
  'Finotive Funding': <FinotiveFunding width={50} height={50} />,
  'For Traders': <ForTraders width={50} height={50} />,
  'FTM': <FTM width={50} height={50} fill="white" />,
  'FundedNext': <FundedNext width={50} height={50} />,
  'Funded Trading Plus': <FundedTradingPlus width={50} height={50} />,
  'Funding Pips': <FundingPips width={50} height={50} />,
  'Funding Traders': <FundingTraders width={50} height={50} />,
  'Fxify': <Fxify width={50} height={50} />,
  'Goat Funded Trader': <GoatFundedTrader width={50} height={50} />,
  'Instant Funding': <InstantFunding width={50} height={50} />,
  'Lark Funding': <LarkFunding width={50} height={50} />,
  'Ment Funding': <MentFunding width={50} height={50} />,
  'MyFundedFX': <MyFundedFX width={50} height={50} />,
  'QuantTekel': <QuantTekel width={50} height={50} />,
  'The5Percenters': <The5Percenters width={50} height={50} />,
  'The Trading Pit': <TheTradingPit width={50} height={50} />,
  'Topstep': <Topstep width={50} height={50} />,
  'Trade Day': <TradeDay width={50} height={50} />,
  'Trade The Pool': <TradeThePool width={50} height={50} />,
};

export default firmLogos;
