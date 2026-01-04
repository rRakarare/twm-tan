import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/leistungen/ki-automatisierung")({
	component: KIAutomatisierung,
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

function KIAutomatisierung() {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-4 py-16 max-w-6xl">
			<h1 className="text-4xl font-bold mb-8">{t("services.ai.title")}</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>{t("services.ai.agents.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.ai.agents.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.ai.analytics.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base mb-2">
							{t("services.ai.analytics.description")}
						</CardDescription>
						<p className="text-sm text-muted-foreground">
							{t("services.ai.analytics.detail")}
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
