interface LinkProps {
  label: string;
  href: string;
}

function Link({ label, href }: LinkProps) {
  return (
    <a
      href={href}
      className="text-sm leading-snug text-brand-500 decoration-[none] md:text-[1rem] md:leading-6"
    >
      {label}
    </a>
  );
}

export default Link;
