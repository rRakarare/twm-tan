import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/leistungen/ki-automatisierung")({
	component: KIAutomatisierung,
});

function KIAutomatisierung() {
	return (
		<div className="min-h-screen flex items-center justify-center px-6">
			<div className="text-center max-w-3xl">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter">
					KI & Automatisierung
				</h1>
			</div>
		</div>
	);
}
