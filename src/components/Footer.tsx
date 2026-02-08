import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="gallery-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Brian Chang</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Fine art photography prints capturing the quiet beauty of landscapes 
              and natural moments.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-muted-foreground">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/gallery" className="text-sm hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-sm hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-sm hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hello@brianchangprints.com"
                className="p-2 border border-border rounded-sm hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Brian Chang Prints. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
