"use client";

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type BlogShareButtonsProps = {
  title: string;
  url: string;
  excerpt?: string;
};

export default function BlogShareButtons({
  title,
  url,
  excerpt,
}: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title}\n${url}`);

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  async function handleInstagramShare() {
    const shareText = excerpt ? `${title}\n\n${excerpt}` : title;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: shareText,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch {
        setCopied(false);
      }
    }
  }

  return (
    <div className="rounded-[32px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#0D2444]/10">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6288B9]">
        Share This Blog
      </p>

      <h3
        className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#0D2444]"
        style={{
          fontFamily: "New York, ui-serif, Georgia, serif",
        }}
      >
        Send to Others
      </h3>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="flex h-14 items-center justify-center rounded-[18px] border border-[#DCE7F5] bg-[#F7FAFF] text-xl text-[#0D2444] transition hover:-translate-y-0.5 hover:bg-[#EAF2FF]"
        >
          <FaWhatsapp />
        </a>

        <button
          type="button"
          onClick={handleInstagramShare}
          aria-label="Share on Instagram"
          className="flex h-14 items-center justify-center rounded-[18px] border border-[#DCE7F5] bg-[#F7FAFF] text-xl text-[#0D2444] transition hover:-translate-y-0.5 hover:bg-[#EAF2FF]"
        >
          <FaInstagram />
        </button>

        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-14 items-center justify-center rounded-[18px] border border-[#DCE7F5] bg-[#F7FAFF] text-xl text-[#0D2444] transition hover:-translate-y-0.5 hover:bg-[#EAF2FF]"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {copied && (
        <p className="mt-4 rounded-full bg-[#EAF2FF] px-4 py-2 text-center text-xs font-black uppercase tracking-[0.14em] text-[#315E91]">
          Link copied
        </p>
      )}
    </div>
  );
}