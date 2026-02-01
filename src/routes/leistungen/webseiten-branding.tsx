import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout, Palette } from "lucide-react";
import { SectionImageLeft, SectionImageRight } from "@/components/sections";
import { IconPlaceholder } from "@/components/ui/icon-placeholder";

export const Route = createFileRoute("/leistungen/webseiten-branding")({
	component: WebseitenBranding,
	head: () => ({
		meta: [
			{
				title: "Webseiten & Branding -- Webdesign & Corporate Identity | TWM",
			},
			{
				name: "description",
				content:
					"Professionelles Webdesign, Landingpages, Logo-Erstellung und Corporate Design für eine starke visuelle Markenidentität.",
			},
		],
	}),
});

function WebseitenBranding() {
	const { t } = useTranslation();

	return (
		<div>
			<div className="container py-16">
				<h1 className="text-4xl font-bold mb-4">{t("services.web.title")}</h1>
				<p className="text-lg text-muted-foreground mb-12">
					Moderne Websites und einheitliches Branding für Ihren Erfolg.
				</p>
			</div>

			<section id="webdesign" className="scroll-mt-24">
				<SectionImageLeft
					image={<IconPlaceholder icon={Layout} gradientIndex={0} />}
					heading={t("services.web.webdesign.title")}
					text={<p>{t("services.web.webdesign.description")}</p>}
				/>
			</section>

			<section id="branding" className="scroll-mt-24">
				<SectionImageRight
					image={<IconPlaceholder icon={Palette} gradientIndex={3} />}
					heading={t("services.web.branding.title")}
					text={<p>{t("services.web.branding.description")}</p>}
				/>
			</section>
		</div>
	);
}
