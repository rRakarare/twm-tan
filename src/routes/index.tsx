import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/custom/hero";

export const Route = createFileRoute("/")({
	component: Home,
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

function Home() {
	return <Hero />;
}
