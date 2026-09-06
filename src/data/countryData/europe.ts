import { CountryPageData } from '../../types/country';
import { germanyCountryData } from './germany';

export const europeCountryData: CountryPageData = {
  ...germanyCountryData,
  id: 'europe',
  slug: 'study-in-europe',
  name: 'Europe',
  flag: '🇪🇺',
  flagImage: 'https://flagcdn.com/w640/eu.png',
  tagline: 'Zero or Low Tuition at Public Universities Across Germany & Schengen Europe, 18-Month Job Search Visa',
  overview: 'Europe represents the pinnacle of affordable, high-quality international education. With world-renowned tuition-free public universities across Germany and subsidized tuition models across Finland, Sweden, Austria, and France, European degrees offer research heritage, 29-country Schengen mobility, and direct post-study job seeker visas.'
};
