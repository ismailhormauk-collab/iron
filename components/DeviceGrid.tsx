import { devices, type Device } from "@/lib/devices";
import { AndroidIcon, BoxIcon, ComputerIcon, StickIcon, TvIcon } from "./icons";

const icons: Record<Device["icon"], typeof TvIcon> = {
  tv: TvIcon,
  android: AndroidIcon,
  firestick: StickIcon,
  computer: ComputerIcon,
  box: BoxIcon,
};

export function DeviceGrid() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {devices.map((d) => {
        const Icon = icons[d.icon];
        return (
          <li
            key={d.id}
            className="group flex flex-col items-center rounded-2xl border border-line bg-white px-4 py-6 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-violet-brand/30"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-tint to-electric-tint text-violet-brand transition group-hover:scale-105">
              <Icon className="size-7" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{d.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted">{d.detail}</p>
          </li>
        );
      })}
    </ul>
  );
}
