import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const { t } = useTranslation();

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<h1 className="text-8xl font-bold">{t("hello")}</h1>
		</div>
	);
}
