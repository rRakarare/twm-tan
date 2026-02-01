import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/ueber-uns")({
	component: UeberUns,
	head: () => ({
		meta: [
			{
				title: "Über TWM -- Marketingberatung & Digitalisierung für KMU",
			},
			{
				name: "description",
				content:
					"Erfahren Sie mehr über TWM: Marketingexpertise, digitale Lösungen, KI-gestützte Prozesse und ein starkes Partnernetzwerk für nachhaltiges Wachstum.",
			},
		],
	}),
});

function UeberUns() {
	const { t } = useTranslation();

	return (
		<div className="container py-16">
			<h1 className="text-4xl font-bold mb-6">{t("about.title")}</h1>
			<p className="text-xl mb-4">{t("about.intro")}</p>
			<p className="text-lg mb-8">{t("about.experience")}</p>

			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					{t("about.strengths.title")}
				</h2>
				<ul className="list-disc list-inside space-y-2">
					{(t("about.strengths.items", { returnObjects: true }) as string[]).map(
						(item) => (
							<li key={item}>{item}</li>
						),
					)}
				</ul>
			</div>

			<div className="bg-muted p-6 rounded-lg">
				<h2 className="text-2xl font-semibold mb-3">
					{t("about.goal.title")}
				</h2>
				<p className="text-lg mb-2">{t("about.goal.text")}</p>
				{t("about.goal.detail") && (
					<p className="text-base">{t("about.goal.detail")}</p>
				)}
			</div>
		</div>
	);
}
