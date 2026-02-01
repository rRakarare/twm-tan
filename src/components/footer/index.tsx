import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram } from "lucide-react";
import TWMIcon from "@/components/custom/twm-icon";
import { footerSections, socialLinks } from "./footer-data";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-background">
			<div className="container py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand Column */}
					<div className="space-y-4">
						<Link to="/" className="inline-block">
							<TWMIcon className="h-10 w-10 fill-primary" />
						</Link>
						<p className="text-sm text-muted-foreground">
							Digitale Sichtbarkeit für lokale Unternehmen.
						</p>
						<div className="flex gap-4">
							<a
								href={socialLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href={socialLinks.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Link Sections */}
					{footerSections.map((section) => (
						<div key={section.heading}>
							<h3 className="font-semibold mb-4">{section.heading}</h3>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.href}>
										<Link
											to={link.href}
											className="text-sm text-muted-foreground hover:text-primary transition-colors"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t">
					<p className="text-sm text-muted-foreground text-center">
						© {currentYear} TWM. Alle Rechte vorbehalten.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
