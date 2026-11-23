'use client';

import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function QuickConnectPill() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setIsMenuOpen(Boolean(customEvent?.detail?.open));
    };

    window.addEventListener('mobile-menu-toggle', handleMenuToggle);
    return () => window.removeEventListener('mobile-menu-toggle', handleMenuToggle);
  }, []);

  // When mobile hamburger menu is open, remove the floating button so it never overlaps
  if (isMenuOpen) {
    return null;
  }

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="floating-whatsapp-btn fixed z-40 transition-all duration-300"
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))',
        right: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
      }}
    >
      <a
        href={COMPANY_INFO.contact.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us only (+91 70266 47347)"
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-sans text-xs font-bold tracking-wide shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/45 transition-all duration-300 group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
        <span className="font-semibold whitespace-nowrap">WhatsApp us only</span>
      </a>
    </aside>
  );
}
