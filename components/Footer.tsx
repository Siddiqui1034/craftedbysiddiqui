import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold font-rajdhani mb-3">N.S. Portfolio</h2>
          <p className="text-gray-400 leading-6">
            Frontend Developer passionate about crafting elegant web interfaces.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg font-rajdhani">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3 text-lg font-rajdhani">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <GithubOutlined className="text-2xl hover:text-rose-500 transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedinOutlined className="text-2xl hover:text-rose-500 transition" />
            </a>
            <a href="mailto:you@example.com">
              <MailOutlined className="text-2xl hover:text-rose-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} N.S. Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
