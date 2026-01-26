type ResourceLink = {
  href: string;
  label: string;
};

type ResourceCardProps = {
  title: string;
  links: ResourceLink[];
  icon?: IconType;
};

export default function ResourceCard({ title, links, icon: Icon }: ResourceCardProps) {
  return (
    <div className="rounded-xl border border-[#68528D] bg-linear-to-b from-[#070707] to-[#111C2A] p-6">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-50">
        {Icon && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#68528D] bg-black/60 text-[#A5B4FC]">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <span className="uppercase tracking-wide">{title}</span>
      </h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-[#A5B4FC] hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
import type { IconType } from 'react-icons';
