import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
	component: Datenschutz,
	head: () => ({
		meta: [
			{
				title: "Datenschutzerklärung | TWM",
			},
			{
				name: "description",
				content: "Datenschutzerklärung der TWM.",
			},
		],
	}),
});

function Datenschutz() {
	return (
		<div className="container py-16">
			<h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

			<div className="prose prose-invert max-w-none space-y-8">
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						1. Datenschutz auf einen Blick
					</h2>
					<h3 className="text-xl font-medium mb-2">Allgemeine Hinweise</h3>
					<p className="text-muted-foreground">
						Die folgenden Hinweise geben einen einfachen Überblick darüber, was
						mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
						besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
						persönlich identifiziert werden können.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						2. Allgemeine Hinweise und Pflichtinformationen
					</h2>
					<h3 className="text-xl font-medium mb-2">Datenschutz</h3>
					<p className="text-muted-foreground">
						Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
						Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
						vertraulich und entsprechend der gesetzlichen
						Datenschutzvorschriften sowie dieser Datenschutzerklärung.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						3. Datenerfassung auf dieser Website
					</h2>
					<h3 className="text-xl font-medium mb-2">Cookies</h3>
					<p className="text-muted-foreground">
						Unsere Internetseiten verwenden teilweise so genannte Cookies.
						Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
						keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
						effektiver und sicherer zu machen.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">4. Analyse-Tools</h2>
					<p className="text-muted-foreground">
						Auf dieser Website werden keine Analyse-Tools von Drittanbietern
						eingesetzt, die Ihr Nutzungsverhalten auswerten.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">5. Kontaktformular</h2>
					<p className="text-muted-foreground">
						Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
						Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
						angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
						Fall von Anschlussfragen bei uns gespeichert.
					</p>
				</section>
			</div>
		</div>
	);
}
