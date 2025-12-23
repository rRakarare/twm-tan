import { ArrowUpRight, CirclePlay } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen flex items-center justify-center px-6">
			<div className="text-center max-w-3xl">
				<Badge
					variant="secondary"
					className="rounded-full py-1 border-border"
					asChild
				>
					<div>
						Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
					</div>
				</Badge>
				<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
					TW-Media
				</h1>
				<p className="mt-6 md:text-lg text-foreground/80">{t("hello")}</p>
				<div className="mt-12 flex items-center justify-center gap-4">
					<Button size="lg" className="rounded-full text-base">
						Get Started <ArrowUpRight className="size-5" />
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="rounded-full text-base shadow-none"
					>
						<CirclePlay className="size-5" /> Watch Demo
					</Button>
				</div>
			</div>
		</div>
	);
}
