import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/leistungen/webseiten-branding")({
	component: WebseitenBranding,
	head: () => ({
		meta: [
			{
				title:
					"Unsere Leistungen -- Digitale Werbung, Local SEO, KI & Webdesign | TWM",
			},
			{
				name: "description",
				content:
					"Übersicht aller TWM-Leistungen: Digitale Werbemittel, Branchenportale, Bewertungen, Webdesign, KI-Lösungen und Prozessautomatisierung.",
			},
		],
	}),
});

function WebseitenBranding() {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-4 py-16 max-w-6xl">
			<h1 className="text-4xl font-bold mb-8">{t("services.web.title")}</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>{t("services.web.webdesign.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.web.webdesign.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.web.branding.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.web.branding.description")}
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
