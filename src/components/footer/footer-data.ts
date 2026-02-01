export interface FooterLink {
	title: string;
	href: string;
}

export interface FooterSection {
	heading: string;
	links: FooterLink[];
}

export const footerSections: FooterSection[] = [
	{
		heading: "Unternehmen",
		links: [
			{ title: "Home", href: "/" },
			{ title: "Über uns", href: "/ueber-uns" },
			{ title: "Partner", href: "/partner" },
			{ title: "Kontakt", href: "/kontakt" },
		],
	},
	{
		heading: "Leistungen",
		links: [
			{ title: "Sichtbarkeit steigern", href: "/leistungen/sichtbarkeit-steigern" },
			{ title: "Digitale Werbung", href: "/leistungen/digitale-werbung" },
			{ title: "Webseiten & Branding", href: "/leistungen/webseiten-branding" },
			{ title: "KI & Automatisierung", href: "/leistungen/ki-automatisierung" },
		],
	},
	{
		heading: "Rechtliches",
		links: [
			{ title: "Impressum", href: "/impressum" },
			{ title: "Datenschutz", href: "/datenschutz" },
		],
	},
];

export const socialLinks = {
	linkedin: "https://linkedin.com",
	instagram: "https://instagram.com",
};
