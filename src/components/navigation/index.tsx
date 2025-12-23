import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ToneToggle from "../custom/toneToggle";
import TWMIcon from "../custom/twm-icon";

function Navigation() {
	return (
		<div className="fixed w-full top-5">
			<div className="border p-4 rounded-md mx-auto max-w-3xl flex items-center justify-between">
				<TWMIcon className="fill-primary size-10" />
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<ToneToggle />
			</div>
		</div>
	);
}

export default Navigation;
