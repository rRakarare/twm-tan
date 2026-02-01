import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { MapPin, Star, BarChart3 } from "lucide-react";
import {
	SectionImageLeft,
	SectionImageRight,
	SectionCentered,
} from "@/components/sections";
import { IconPlaceholder } from "@/components/ui/icon-placeholder";

export const Route = createFileRoute("/leistungen/sichtbarkeit-steigern")({
	component: SichtbarkeitSteigern,
	head: () => ({
		meta: [
			{
				title:
					"Sichtbarkeit steigern -- Local SEO, Bewertungen & Analytics | TWM",
			},
			{
				name: "description",
				content:
					"Steigern Sie Ihre lokale Sichtbarkeit mit Local Listing, professionellem Bewertungsmanagement und datenbasierten Insights.",
			},
		],
	}),
});

function SichtbarkeitSteigern() {
	const { t } = useTranslation();

	return (
		<div>
			<div className="container py-16">
				<h1 className="text-4xl font-bold mb-4">
					{t("services.visibility.title")}
				</h1>
				<p className="text-lg text-muted-foreground mb-12">
					Werden Sie online gefunden und stärken Sie Ihre lokale Präsenz.
				</p>
			</div>

			<section id="listing" className="scroll-mt-24">
				<SectionImageLeft
					image={<IconPlaceholder icon={MapPin} gradientIndex={0} />}
					heading={t("services.visibility.listing.title")}
					text={
						<>
							<p className="mb-4">
								{t("services.visibility.listing.description")}
							</p>
							<p className="text-muted-foreground">
								{t("services.visibility.listing.detail")}
							</p>
						</>
					}
				/>
			</section>

			<section id="reviews" className="scroll-mt-24">
				<SectionImageRight
					image={<IconPlaceholder icon={Star} gradientIndex={1} />}
					heading={t("services.visibility.reviews.title")}
					text={
						<>
							<p className="mb-4">
								{t("services.visibility.reviews.description")}
							</p>
							<p className="text-muted-foreground">
								{t("services.visibility.reviews.detail")}
							</p>
						</>
					}
				/>
			</section>

			<section id="analytics" className="scroll-mt-24">
				<SectionCentered
					image={<IconPlaceholder icon={BarChart3} gradientIndex={2} />}
					heading={t("services.visibility.analytics.title")}
					text={
						<>
							<p className="mb-4">
								{t("services.visibility.analytics.description")}
							</p>
							<p className="text-muted-foreground">
								{t("services.visibility.analytics.detail")}
							</p>
						</>
					}
				/>
			</section>
		</div>
	);
}
