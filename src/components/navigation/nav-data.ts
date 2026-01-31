import { Eye, Megaphone, Globe, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceSublink {
	label: string;
	anchor: string;
}

export interface Service {
	title: string;
	href: string;
	icon: LucideIcon;
	sublinks: ServiceSublink[];
}

export interface NavLink {
	title: string;
	href: string;
}

export const services: Service[] = [
	{
		title: "Sichtbarkeit steigern",
		href: "/leistungen/sichtbarkeit-steigern",
		icon: Eye,
		sublinks: [
			{ label: "SEO Optimierung", anchor: "seo" },
			{ label: "Local SEO", anchor: "local-seo" },
			{ label: "Content Marketing", anchor: "content" },
			{ label: "Social Media", anchor: "social" },
			{ label: "Google Business", anchor: "google-business" },
			{ label: "Analytics", anchor: "analytics" },
		],
	},
	{
		title: "Digitale Werbung",
		href: "/leistungen/digitale-werbung",
		icon: Megaphone,
		sublinks: [
			{ label: "Google Ads", anchor: "google-ads" },
			{ label: "Meta Ads", anchor: "meta-ads" },
			{ label: "Display Werbung", anchor: "display" },
			{ label: "Remarketing", anchor: "remarketing" },
			{ label: "Kampagnen", anchor: "kampagnen" },
			{ label: "Performance", anchor: "performance" },
		],
	},
	{
		title: "Webseiten & Branding",
		href: "/leistungen/webseiten-branding",
		icon: Globe,
		sublinks: [
			{ label: "Webdesign", anchor: "webdesign" },
			{ label: "Responsive Design", anchor: "responsive" },
			{ label: "Corporate Identity", anchor: "ci" },
			{ label: "Logo Design", anchor: "logo" },
			{ label: "Branding", anchor: "branding" },
			{ label: "UX Design", anchor: "ux" },
		],
	},
	{
		title: "KI & Automatisierung",
		href: "/leistungen/ki-automatisierung",
		icon: Bot,
		sublinks: [
			{ label: "Chatbots", anchor: "chatbots" },
			{ label: "Automatisierung", anchor: "automatisierung" },
			{ label: "KI-Integration", anchor: "ki-integration" },
			{ label: "Workflows", anchor: "workflows" },
			{ label: "Datenanalyse", anchor: "datenanalyse" },
			{ label: "API Integration", anchor: "api" },
		],
	},
];

export const navLinks: NavLink[] = [
	{ title: "Über uns", href: "/ueber-uns" },
	{ title: "Partner", href: "/partner" },
	{ title: "Kontakt", href: "/kontakt" },
];
