import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		meta: [
			{
				title: "TWM -- Digitale Werbung, Sichtbarkeit & KI-Lösungen für KMU",
			},
			{
				name: "description",
				content:
					"TWM unterstützt kleine und mittelständische Unternehmen mit digitaler Werbung, Local SEO, Branchenportalen, KI-Automatisierung und modernen Marketingstrategien.",
			},
		],
	}),
});

function App() {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-4 py-16 max-w-4xl">
			<h1 className="text-4xl font-bold mb-6">{t("home.title")}</h1>
			<p className="text-xl mb-4">{t("home.subtitle")}</p>
			<p className="text-lg mb-8">{t("home.description")}</p>

			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">{t("home.benefits.title")}</h2>
				<ul className="list-disc list-inside space-y-2">
					{(t("home.benefits.items", { returnObjects: true }) as string[]).map(
						(item) => (
							<li key={item}>{item}</li>
						),
					)}
				</ul>
			</div>

			<Button size="lg">{t("home.cta")}</Button>
		</div>
	);
}
