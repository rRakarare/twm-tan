import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/partner")({
	component: Partner,
	head: () => ({
		meta: [
			{
				title:
					"Partner -- Unsere Experten für Werbung, KI, Design & Digitalisierung",
			},
			{
				name: "description",
				content:
					"TWM arbeitet mit starken Partnern wie Advantago, Sternfaenger, P19 und Design-Spezialisten zusammen, um ganzheitliche Lösungen zu bieten.",
			},
		],
	}),
});

function Partner() {
	const { t } = useTranslation();

	const partners = [
		"advantago",
		"sternfaenger",
		"p19",
		"kevin",
		"freelancer",
	] as const;

	return (
		<div className="container py-16">
			<h1 className="text-4xl font-bold mb-6">{t("partners.title")}</h1>
			<p className="text-xl mb-8">{t("partners.intro")}</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{partners.map((partner) => (
					<Card key={partner}>
						<CardHeader>
							<CardTitle>{t(`partners.list.${partner}.name`)}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="text-base">
								{t(`partners.list.${partner}.description`)}
							</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>

			<p className="text-lg text-center">{t("partners.footer")}</p>
		</div>
	);
}
