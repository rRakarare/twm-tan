import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const gradients = [
	"from-blue-500 to-purple-600",
	"from-green-500 to-teal-600",
	"from-orange-500 to-red-600",
	"from-pink-500 to-rose-600",
	"from-amber-500 to-yellow-600",
	"from-indigo-500 to-blue-600",
] as const;

interface IconPlaceholderProps {
	icon: LucideIcon;
	gradientIndex?: number;
	className?: string;
}

export function IconPlaceholder({
	icon: Icon,
	gradientIndex = 0,
	className,
}: IconPlaceholderProps) {
	const gradient = gradients[gradientIndex % gradients.length];

	return (
		<div
			className={cn(
				"w-full aspect-video bg-gradient-to-br rounded-xl flex items-center justify-center",
				gradient,
				className,
			)}
		>
			<Icon className="w-24 h-24 text-white" />
		</div>
	);
}
