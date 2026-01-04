import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/leistungen/sichtbarkeit-steigern")({
	component: SichtbarkeitSteigern,
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

function SichtbarkeitSteigern() {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-4 py-16 max-w-6xl">
			<h1 className="text-4xl font-bold mb-8">
				{t("services.visibility.title")}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>{t("services.visibility.listing.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base mb-2">
							{t("services.visibility.listing.description")}
						</CardDescription>
						<p className="text-sm text-muted-foreground">
							{t("services.visibility.listing.detail")}
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.visibility.reviews.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base mb-2">
							{t("services.visibility.reviews.description")}
						</CardDescription>
						<p className="text-sm text-muted-foreground">
							{t("services.visibility.reviews.detail")}
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.visibility.analytics.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base mb-2">
							{t("services.visibility.analytics.description")}
						</CardDescription>
						<p className="text-sm text-muted-foreground">
							{t("services.visibility.analytics.detail")}
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
