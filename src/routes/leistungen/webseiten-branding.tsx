import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/leistungen/webseiten-branding")({
	component: WebseitenBranding,
});

function WebseitenBranding() {
	return (
		<div className="min-h-screen flex items-center justify-center px-6">
			<div className="text-center max-w-3xl">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter">
					Webseiten & Branding
				</h1>
			</div>
		</div>
	);
}
