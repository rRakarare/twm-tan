import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/leistungen/digitale-werbung")({
	component: DigitaleWerbung,
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

function DigitaleWerbung() {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-4 py-16 max-w-6xl">
			<h1 className="text-4xl font-bold mb-8">
				{t("services.advertising.title")}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.sea.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base mb-2">
							{t("services.advertising.sea.description")}
						</CardDescription>
						<p className="text-sm text-muted-foreground">
							{t("services.advertising.sea.detail")}
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.video.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base mb-2">
							{t("services.advertising.video.description")}
						</CardDescription>
						<p className="text-sm text-muted-foreground">
							{t("services.advertising.video.detail")}
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.display.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.advertising.display.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.native.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.advertising.native.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.cube.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.advertising.cube.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.dooh.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.advertising.dooh.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.spotify.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.advertising.spotify.description")}
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>{t("services.advertising.tv.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-base">
							{t("services.advertising.tv.description")}
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
