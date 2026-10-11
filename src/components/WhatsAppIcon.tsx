import React from "react";
import Image from "next/image";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
  white?: boolean;
  black?: boolean;
}

export default function WhatsAppIcon({
  className = "w-4 h-4",
  size = 20,
  white = false,
  black = false,
}: WhatsAppIconProps) {
  const src = black
    ? "/images/whatsapp-negro.png"
    : white
    ? "/images/whatsapp-blanco.png"
    : "/images/whatsapp.png";

  return (
    <span className={`inline-flex items-center justify-center flex-shrink-0 relative ${black ? "brightness-0" : ""} ${className}`}>
      <Image
        src={src}
        alt="WhatsApp"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </span>
  );
}
