import { ChainIdString } from '@/utils/supportedChains';
import moralisLogo from '../common/moralisLogo.svg';
import { TradingViewCustomizationTheme } from '../priceChart/utils/theme';

type Utm = { source: string; medium: string };
type FooterOpts = {
  tokenAddress?: string;
  pairAddress?: string;
  theme?: TradingViewCustomizationTheme;
  backgroundColor?: string;
};
const TOKEN_PAGE_CHAINS = {
  'solana': 'solana',
  '0x1': 'ethereum',
  '0x38': 'binance',
  '0x2105': 'base',
  '0xa4b1': 'arbitrum',
  '0x89': 'polygon',
  '0xa86a': 'avalanche',
  '0xa': 'optimism',
  '0xe708': 'linea',
  '0xfa': 'fantom',
  '0x171': 'pulse',
  '0x7e4': 'ronin',
} as const satisfies Record<ChainIdString, string>;

const getBgColor = (opts: { theme?: FooterOpts['theme']; backgroundColor?: FooterOpts['backgroundColor'] }) => {
  if (opts?.theme === 'dark') return '#131722';
  if (opts?.theme === 'light') return '#FFFFFF';
  return opts?.backgroundColor || '#071321';
};
const setUtm = (utm: Utm) => `?utm_source=${utm.source}&utm_medium=${utm.medium}`;

const getRedirectUrl = (
  seoDomain: string,
  chainId: ChainIdString,
  utm: Utm,
  opts: { tokenAddress?: FooterOpts['tokenAddress']; pairAddress?: FooterOpts['pairAddress'] },
) => {
  const formatAddress = (address: string) => (chainId !== TOKEN_PAGE_CHAINS.solana ? address.toLowerCase() : address);

  if (opts.pairAddress) {
    return fetch(`${seoDomain}/api/widgets/pair-to-token-address?chainId=${chainId}&pairAddress=${opts.pairAddress}`)
      .then((res) => res.json())
      .then((json) => {
        const addr = formatAddress(json.tokenAddress);
        return `${seoDomain}/chain/${TOKEN_PAGE_CHAINS[chainId]}/token/price/${addr}${setUtm(utm)}`;
      })
      .catch(() => `${seoDomain}${setUtm(utm)}`);
  }

  if (opts.tokenAddress) {
    const addr = formatAddress(opts.tokenAddress);
    return Promise.resolve(`${seoDomain}/chain/${TOKEN_PAGE_CHAINS[chainId]}/token/price/${addr}${setUtm(utm)}`);
  }

  return Promise.resolve(`${seoDomain}${setUtm(utm)}`);
};

export const createWgetFooter = (seoDomain: string, chainId: ChainIdString, utm: Utm, opts: FooterOpts) => {
  const anchor = document.createElement('a');
  Object.assign(anchor.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'filter 0.3s ease',
    padding: '12px',
    backgroundColor: getBgColor(opts),
  });
  anchor.target = '_blank';

  const img = document.createElement('img');
  Object.assign(img.style, {
    width: '21.15px',
    height: '16.26px',
  });
  img.src = `${seoDomain}/${moralisLogo}`;
  img.alt = 'Moralis';

  const text = document.createElement('span');
  Object.assign(text.style, {
    marginLeft: '6px',
    fontSize: '12px',
    color: '#68738D',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '14.4px',
  });
  text.textContent = 'Powered by Moralis';

  anchor.appendChild(img);
  anchor.appendChild(text);

  anchor.addEventListener('mouseenter', () => {
    anchor.style.filter = 'brightness(1.2)';
  });
  anchor.addEventListener('mouseleave', () => {
    anchor.style.filter = 'brightness(1)';
  });

  getRedirectUrl(seoDomain, chainId, utm, opts).then((url) => {
    anchor.href = url;
  });

  return anchor;
};
