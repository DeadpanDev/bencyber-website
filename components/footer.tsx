import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-center text-neutral-500 dark:text-neutral-500 mt-10 mb-10">
      <div className="flex items-center justify-center gap-2">
        <p>&copy; {new Date().getFullYear()} Bencyber. All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className="flex items-center justify-center gap-2">
          <a
            href="https://github.com/deadpandev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
