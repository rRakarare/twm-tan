import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
	component: Impressum,
	head: () => ({
		meta: [
			{
				title: "Impressum | TWM",
			},
			{
				name: "description",
				content: "Impressum und rechtliche Angaben der TWM.",
			},
		],
	}),
});

function Impressum() {
	return (
		<div className="container py-16">
			<h1 className="text-4xl font-bold mb-8">Impressum</h1>

			<div className="prose prose-invert max-w-none space-y-8">
				<section>
					<h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
					<p className="text-muted-foreground">
						TWM GmbH
						<br />
						Musterstraße 123
						<br />
						12345 Musterstadt
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
					<p className="text-muted-foreground">
						Telefon: +49 (0) 123 456789
						<br />
						E-Mail: info@twm.de
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Handelsregister</h2>
					<p className="text-muted-foreground">
						Registergericht: Amtsgericht Musterstadt
						<br />
						Registernummer: HRB 12345
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Umsatzsteuer-Identifikationsnummer
					</h2>
					<p className="text-muted-foreground">
						Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
						<br />
						DE123456789
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
					</h2>
					<p className="text-muted-foreground">
						Max Mustermann
						<br />
						Musterstraße 123
						<br />
						12345 Musterstadt
					</p>
				</section>
			</div>
		</div>
	);
}
