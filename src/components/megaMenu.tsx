import Link from 'next/link';

export interface MegaMenuItem{
  title: string;
  links: { name: string; href: string}[];
}

interface MegaMenuProps {
  sections: MegaMenuItem[];
}

export default function MegaMenu({ sections }: MegaMenuProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="hidden group-hover:block absolute left-0 right-0 w-full top-full bg-white text-black shadow-2xl z-50 py-7">
      <div className='max-w-7xl mx-auto px-20 grid grid-cols-4 gap-10'>
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold border-b-1 border-black pb-1 mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link href={link.href} className="hover:text-black hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}