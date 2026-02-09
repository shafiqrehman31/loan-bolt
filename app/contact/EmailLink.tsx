'use client';

import { useState } from 'react';

interface EmailLinkProps {
  email: string;
  label: string;
}

export default function EmailLink({ email, label }: EmailLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={`mailto:${email}`}
      style={{
        color: isHovered ? '#ffffff' : '#ffce00',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </a>
  );
}