import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-100 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/images/logo.svg" alt="Community Needs Navigator Logo" width={36} height={36} className="rounded-full" />
              <div>
                <span className="block font-bold text-white text-sm">Community Needs</span>
                <span className="block text-sage-300 text-xs tracking-wide">NAVIGATOR</span>
              </div>
            </div>
            <p className="text-sage-300 text-sm leading-relaxed">
              Empowering communities and creating positive change through AI-powered grant review.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sage-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <a
              href="mailto:hsburke2003@gmail.com"
              className="text-sage-300 hover:text-white transition-colors text-sm"
            >
              hsburke2003@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-sage-700 pt-6 text-center text-sage-400 text-xs">
          © {new Date().getFullYear()} Community Needs Navigator · Hannah Burke. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
