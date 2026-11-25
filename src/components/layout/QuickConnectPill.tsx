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

  if (isMenuOpen) {
    return null;
  }

  return (
    <aside
      aria-label="WhatsApp Trade Desk"
      className="floating-whatsapp-btn fixed z-40"
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))',
        right: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
      }}
    >
      <a
        href={COMPANY_INFO.contact.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Trade Desk (+91 70266 47347)"
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-[#15803D] hover:bg-[#166534] text-white border border-white/15 font-sans text-xs font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
        <span className="whitespace-nowrap">WhatsApp Trade Desk</span>
      </a>
    </aside>
  );
}
