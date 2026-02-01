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
			{ label: "Local Listing", anchor: "listing" },
			{ label: "Bewertungen", anchor: "reviews" },
			{ label: "Analytics", anchor: "analytics" },
		],
	},
	{
		title: "Digitale Werbung",
		href: "/leistungen/digitale-werbung",
		icon: Megaphone,
		sublinks: [
			{ label: "SEA & Social Ads", anchor: "sea" },
			{ label: "Video Werbung", anchor: "video" },
			{ label: "Display Banner", anchor: "display" },
			{ label: "DOOH & Taxi", anchor: "dooh" },
			{ label: "Spotify Ads", anchor: "spotify" },
			{ label: "Addressable TV", anchor: "tv" },
		],
	},
	{
		title: "Webseiten & Branding",
		href: "/leistungen/webseiten-branding",
		icon: Globe,
		sublinks: [
			{ label: "Webdesign", anchor: "webdesign" },
			{ label: "Logo & Corporate Design", anchor: "branding" },
		],
	},
	{
		title: "KI & Automatisierung",
		href: "/leistungen/ki-automatisierung",
		icon: Bot,
		sublinks: [
			{ label: "KI-Agenten", anchor: "agents" },
			{ label: "Datenanalyse", anchor: "analytics" },
		],
	},
];

export const navLinks: NavLink[] = [
	{ title: "Über uns", href: "/ueber-uns" },
	{ title: "Partner", href: "/partner" },
	{ title: "Kontakt", href: "/kontakt" },
];
