import Cal from "@calcom/embed-react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/kontakt")({
	component: Kontakt,
	head: () => ({
		meta: [
			{
				title: "Kontakt -- Termin vereinbaren | TWM",
			},
			{
				name: "description",
				content:
					"Vereinbaren Sie ein kostenloses Erstgespräch mit TWM. Wir besprechen Ihre digitale Sichtbarkeit, Marketingziele und passende Lösungen.",
			},
		],
	}),
});

function Kontakt() {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-4 py-16 max-w-4xl">
			{/* Header with translated content */}
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-bold mb-4">{t("kontakt.title")}</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					{t("kontakt.description")}
				</p>
			</div>

			<Cal
				className="bg-red-600"
				calLink="rene-couturier-mhq4ly/30min"
				config={{ theme: "light" }}
			></Cal>

			{/* Optional footer */}
			<div className="mt-8 text-center">
				<p className="text-sm text-muted-foreground">{t("kontakt.subtitle")}</p>
			</div>
		</div>
	);
}
