import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

interface MobileNavProps {
  isProjectPage?: boolean;
}

const mainNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const projectNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
];

const socialLinks = [
  { href: "mailto:perezmark.tomcat@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/markldp/", label: "LinkedIn" },
  { href: "https://www.upwork.com/freelancers/~0103d5784415cbf113", label: "Upwork" },
  { href: "https://medium.com/@perezmark.tomcat", label: "Medium" },
];

export default function MobileNav({ isProjectPage = false }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const links = isProjectPage ? projectNavLinks : mainNavLinks;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent open={open} onClose={() => setOpen(false)} side="right">
        <nav className="flex flex-col gap-4 mt-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}

          <div className="h-px bg-border my-4" />

          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Connect</p>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
