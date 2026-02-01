import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Bot, BarChart3 } from "lucide-react";
import { SectionImageLeft, SectionImageRight } from "@/components/sections";
import { IconPlaceholder } from "@/components/ui/icon-placeholder";

export const Route = createFileRoute("/leistungen/ki-automatisierung")({
	component: KIAutomatisierung,
	head: () => ({
		meta: [
			{
				title:
					"KI & Automatisierung -- Chatbots, Workflows & Datenanalyse | TWM",
			},
			{
				name: "description",
				content:
					"KI-gestützte Automatisierung: Chatbots, Workflows, Prozessoptimierung und datenbasierte Business Intelligence für Ihr Unternehmen.",
			},
		],
	}),
});

function KIAutomatisierung() {
	const { t } = useTranslation();

	return (
		<div>
			<div className="container py-16">
				<h1 className="text-4xl font-bold mb-4">{t("services.ai.title")}</h1>
				<p className="text-lg text-muted-foreground mb-12">
					Optimieren Sie Ihre Prozesse mit künstlicher Intelligenz.
				</p>
			</div>

			<section id="agents" className="scroll-mt-24">
				<SectionImageLeft
					image={<IconPlaceholder icon={Bot} gradientIndex={5} />}
					heading={t("services.ai.agents.title")}
					text={<p>{t("services.ai.agents.description")}</p>}
				/>
			</section>

			<section id="analytics" className="scroll-mt-24">
				<SectionImageRight
					image={<IconPlaceholder icon={BarChart3} gradientIndex={4} />}
					heading={t("services.ai.analytics.title")}
					text={<p>{t("services.ai.analytics.description")}</p>}
				/>
			</section>
		</div>
	);
}
