import Link from "next/link"
import {
  CameraIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"

const quickLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
]

const contactInfo = [
  { text: "hello@johndoe.com", clickable: true },
  { text: "+62 812-3456-7890", clickable: true },
  { text: "Jakarta, Indonesia", clickable: false },
]

const socialLinks = [
  { icon: CameraIcon, href: "#", label: "Instagram" },
  { icon: BriefcaseIcon, href: "#", label: "LinkedIn" },
  { icon: EnvelopeIcon, href: "#", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-14 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">JD</span>
              </div>
              <span className="font-bold text-xl text-white tracking-wide">
                John <span className="text-orange-500">Doe</span>
              </span>
            </div>

            <p className="text-gray-500 max-w-sm leading-relaxed">
              Professional photographer and designer creating visual stories 
              that inspire and captivate.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-orange-400 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li
                  key={index}
                  className={
                    contact.clickable
                      ? "hover:text-orange-400 transition-all duration-300 cursor-pointer"
                      : ""
                  }
                >
                  {contact.text}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-orange-500/20 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="text-white">John Doe</span>. 
            Built with passion & Next.js
          </p>
        </div>

      </div>
    </footer>
  )
}
