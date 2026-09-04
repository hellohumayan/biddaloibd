import { CountryPageData } from '../../types/country';
import { usaCountryData } from './usa';
import { canadaCountryData } from './canada';
import { ukCountryData } from './uk';
import { australiaCountryData } from './australia';
import { germanyCountryData } from './germany';
import { malaysiaCountryData } from './malaysia';
import { swedenCountryData, finlandCountryData } from './others';

export const allCountryPages: Record<string, CountryPageData> = {
  usa: usaCountryData,
  canada: canadaCountryData,
  uk: ukCountryData,
  australia: australiaCountryData,
  germany: germanyCountryData,
  malaysia: malaysiaCountryData,
  sweden: swedenCountryData,
  finland: finlandCountryData
};

// Aliases and slug mappings for smooth navigation
const slugMap: Record<string, string> = {
  'study-in-usa': 'usa',
  'study-in-united-states': 'usa',
  'study-in-us': 'usa',
  'study-in-america': 'usa',
  'usa': 'usa',
  'united-states': 'usa',

  'study-in-canada': 'canada',
  'canada': 'canada',

  'study-in-uk': 'uk',
  'study-in-united-kingdom': 'uk',
  'study-in-britain': 'uk',
  'uk': 'uk',
  'united-kingdom': 'uk',

  'study-in-australia': 'australia',
  'australia': 'australia',
  'aus': 'australia',

  'study-in-germany': 'germany',
  'germany': 'germany',
  'de': 'germany',

  'study-in-malaysia': 'malaysia',
  'malaysia': 'malaysia',

  'study-in-sweden': 'sweden',
  'sweden': 'sweden',

  'study-in-finland': 'finland',
  'finland': 'finland',

  'study-in-uae': 'malaysia', // fallback map with regional styling
  'study-in-dubai': 'malaysia',
  'study-in-india': 'malaysia',
  'study-in-japan': 'germany'
};

export function getCountryData(param: string): CountryPageData | null {
  const normalized = param.toLowerCase().trim().replace(/^\//, '').replace(/^#\/?/, '');
  const key = slugMap[normalized] || normalized.replace(/^study-in-/, '');
  
  if (allCountryPages[key]) {
    return allCountryPages[key];
  }
  
  // Return USA as premier default if matched loosely
  if (normalized.includes('usa') || normalized.includes('america') || normalized.includes('states')) {
    return usaCountryData;
  }
  if (normalized.includes('canad')) {
    return canadaCountryData;
  }
  if (normalized.includes('uk') || normalized.includes('britain') || normalized.includes('england')) {
    return ukCountryData;
  }
  if (normalized.includes('austr')) {
    return australiaCountryData;
  }
  if (normalized.includes('germ')) {
    return germanyCountryData;
  }
  if (normalized.includes('malay')) {
    return malaysiaCountryData;
  }
  if (normalized.includes('swed')) {
    return swedenCountryData;
  }
  if (normalized.includes('finl')) {
    return finlandCountryData;
  }

  return null;
}
