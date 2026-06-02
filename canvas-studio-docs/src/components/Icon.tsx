import React from 'react';
import { ICONS } from '../data/icons';

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const inner = ICONS[name] || "";
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
