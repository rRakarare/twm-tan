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
		<div className="fixed left-1/2 -translate-x-1/2 top-5">
			<div className="border p-4 rounded-md w-fit">
				<NavigationMenu>
					<NavigationMenuList>
						<TWMIcon className="fill-primary size-10" />

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
						<ToneToggle />
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
}

export default Navigation;
