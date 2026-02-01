import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Megaphone, Video, LayoutGrid, Monitor, Music, Tv } from "lucide-react";
import {
	SectionImageLeft,
	SectionImageRight,
	SectionCentered,
} from "@/components/sections";
import { IconPlaceholder } from "@/components/ui/icon-placeholder";

export const Route = createFileRoute("/leistungen/digitale-werbung")({
	component: DigitaleWerbung,
	head: () => ({
		meta: [
			{
				title: "Digitale Werbung -- Google Ads, Video, Display & mehr | TWM",
			},
			{
				name: "description",
				content:
					"Digitale Werbelösungen: SEA, Social Ads, Video Werbung, Display Banner, DOOH, Spotify Ads und Addressable TV für maximale Reichweite.",
			},
		],
	}),
});

function DigitaleWerbung() {
	const { t } = useTranslation();

	return (
		<div>
			<div className="container py-16">
				<h1 className="text-4xl font-bold mb-4">
					{t("services.advertising.title")}
				</h1>
				<p className="text-lg text-muted-foreground mb-12">
					Erreichen Sie Ihre Zielgruppe mit gezielten digitalen Werbekampagnen.
				</p>
			</div>

			<section id="sea" className="scroll-mt-24">
				<SectionImageLeft
					image={<IconPlaceholder icon={Megaphone} gradientIndex={0} />}
					heading={t("services.advertising.sea.title")}
					text={
						<>
							<p className="mb-4">
								{t("services.advertising.sea.description")}
							</p>
							<p className="text-muted-foreground">
								{t("services.advertising.sea.detail")}
							</p>
						</>
					}
				/>
			</section>

			<section id="video" className="scroll-mt-24">
				<SectionImageRight
					image={<IconPlaceholder icon={Video} gradientIndex={1} />}
					heading={t("services.advertising.video.title")}
					text={
						<>
							<p className="mb-4">
								{t("services.advertising.video.description")}
							</p>
							<p className="text-muted-foreground">
								{t("services.advertising.video.detail")}
							</p>
						</>
					}
				/>
			</section>

			<section id="display" className="scroll-mt-24">
				<SectionCentered
					image={<IconPlaceholder icon={LayoutGrid} gradientIndex={2} />}
					heading={t("services.advertising.display.title")}
					text={<p>{t("services.advertising.display.description")}</p>}
				/>
			</section>

			<section id="dooh" className="scroll-mt-24">
				<SectionImageLeft
					image={<IconPlaceholder icon={Monitor} gradientIndex={3} />}
					heading={t("services.advertising.dooh.title")}
					text={<p>{t("services.advertising.dooh.description")}</p>}
				/>
			</section>

			<section id="spotify" className="scroll-mt-24">
				<SectionImageRight
					image={<IconPlaceholder icon={Music} gradientIndex={4} />}
					heading={t("services.advertising.spotify.title")}
					text={<p>{t("services.advertising.spotify.description")}</p>}
				/>
			</section>

			<section id="tv" className="scroll-mt-24">
				<SectionCentered
					image={<IconPlaceholder icon={Tv} gradientIndex={5} />}
					heading={t("services.advertising.tv.title")}
					text={<p>{t("services.advertising.tv.description")}</p>}
				/>
			</section>
		</div>
	);
}
