import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export const WhatsAppIcon = (props: IconProps) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35M12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.04c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.79a9.43 9.43 0 0 1 2.78 6.72c0 5.24-4.27 9.5-9.5 9.5m8.09-17.6A11.36 11.36 0 0 0 12.04.55C5.73.55.6 5.68.6 11.98c0 2.01.53 3.98 1.53 5.71L.5 23.62l6.06-1.59a11.4 11.4 0 0 0 5.47 1.39h.01c6.3 0 11.43-5.13 11.44-11.44 0-3.05-1.19-5.92-3.35-8.08" />
  </svg>
);

export const TelegramIcon = (props: IconProps) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M21.94 4.3 18.9 18.63c-.23 1.01-.83 1.26-1.68.79l-4.63-3.41-2.23 2.15c-.25.25-.46.46-.94.46l.33-4.71 8.58-7.75c.37-.33-.08-.52-.58-.19L7.15 12.65l-4.57-1.43c-.99-.31-1.01-.99.21-1.47L20.65 2.87c.83-.31 1.55.19 1.29 1.43" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="m5 12.5 4.2 4.2L19 7" /></svg>
);
export const PlusIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M12 5v14M5 12h14" /></svg>
);
export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const ChevronRightIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="m9 6 6 6-6 6" /></svg>
);
export const PlayIcon = (props: IconProps) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}><path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.4-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5" /></svg>
);
export const SparkIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);
export const LayoutIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M9 9v11" /></svg>
);
export const HeadsetIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19c0 1.5-1.5 2.5-4 2.5h-2" /></svg>
);
export const DevicesIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="2" y="4" width="15" height="11" rx="2" /><path d="M6 19h7M9.5 15v4" /><rect x="16" y="9" width="6" height="11" rx="1.5" /></svg>
);
export const KeyIcon = (props: IconProps) => (
  <svg {...base(props)}><circle cx="8" cy="15" r="4" /><path d="m10.8 12.2 8.7-8.7M17 6l2.5 2.5M14.5 8.5 16.5 10.5" /></svg>
);
export const ShieldIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z" /><path d="m9 12 2.2 2.2L15.5 10" /></svg>
);
export const TvIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="2.5" y="5" width="19" height="12.5" rx="2" /><path d="M8 21h8M12 17.5V21" /></svg>
);
export const AndroidIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M5 11a7 7 0 0 1 14 0v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18z" /><path d="M5 12h14M7.5 4.5 9 7M16.5 4.5 15 7" /><circle cx="9.5" cy="9.3" r=".6" fill="currentColor" /><circle cx="14.5" cy="9.3" r=".6" fill="currentColor" /></svg>
);
export const StickIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="7" y="2.5" width="10" height="16" rx="2" /><path d="M10 18.5V21h4v-2.5" /><circle cx="12" cy="7" r="1.2" /></svg>
);
export const ComputerIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M1.5 20h21" /></svg>
);
export const BoxIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="2.5" y="8" width="19" height="9" rx="2" /><path d="M6 12.5h.01M9 12.5h.01M15 12.5h3" /></svg>
);
export const TagIcon = (props: IconProps) => (
  <svg {...base(props)}><path d="M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-9 9z" /><circle cx="7.5" cy="7.5" r="1.3" /></svg>
);
export const CalendarIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const InfoIcon = (props: IconProps) => (
  <svg {...base(props)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
);
export const CopyIcon = (props: IconProps) => (
  <svg {...base(props)}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>
);
