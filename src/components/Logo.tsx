import React, { useState } from 'react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  size = 'md',
}) => {
  const { config } = useSiteConfig();
  const [imageError, setImageError] = useState(false);
  const isLight = variant === 'light';

  // Scaled down text size to maintain a refined, modern, and perfectly proportioned header
  const sizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-[21px]',
    lg: 'text-xl sm:text-2xl',
  }[size];

  const scaleMultiplier = {
    sm: 0.8,
    md: 0.95,
    lg: 1.15
  }[size];

  // Default logo height calibrated for header perfection (28px)
  const configuredHeight = config.branding.logoHeight || 28;
  const computedHeight = Math.round(configuredHeight * scaleMultiplier);

  // Max height bounds per size to maintain ideal header proportions
  const maxHeightClass = {
    sm: 'max-h-[22px]',
    md: 'max-h-[28px] sm:max-h-[30px]',
    lg: 'max-h-[36px]',
  }[size];

  // Primary logo URL: prioritize user custom config, or default to official https://www.biddaloi.com/biddaloiLogo.png
  const primaryLogoUrl = (config.branding.logoUrl && config.branding.logoUrl.trim() !== '')
    ? config.branding.logoUrl
    : 'https://www.biddaloi.com/biddaloiLogo.png';

  const [imgSrc, setImgSrc] = useState<string>(primaryLogoUrl);
  const [hasError, setHasError] = useState(false);

  // Sync if config changes
  React.useEffect(() => {
    setImgSrc(primaryLogoUrl);
    setHasError(false);
  }, [primaryLogoUrl]);

  const handleImageError = () => {
    // If the remote URL fails, fallback to bundled local /biddaloiLogo.png
    if (imgSrc !== '/biddaloiLogo.png') {
      setImgSrc('/biddaloiLogo.png');
    } else {
      setHasError(true);
    }
  };

  // If a logo is available and has not failed to load
  if (imgSrc && !hasError) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={imgSrc}
          alt={config.branding.logoAlt || config.branding.brandName || 'Biddaloi'}
          style={{ height: `${computedHeight}px` }}
          className={`w-auto max-w-[170px] object-contain transition-all ${maxHeightClass} ${
            isLight ? 'brightness-0 invert' : ''
          }`}
          onError={handleImageError}
        />
      </div>
    );
  }

  return (
    <span
      className={`font-black tracking-tight select-none leading-none inline-block ${
        isLight ? 'text-white' : 'text-[#020359]'
      } ${sizeClasses} ${className}`}
    >
      {config.branding.brandName || 'Biddaloi'}
    </span>
  );
};
