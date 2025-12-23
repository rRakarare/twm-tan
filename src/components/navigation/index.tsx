import { Link } from "@tanstack/react-router";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ToneToggle from "../custom/toneToggle";
import TWMIcon from "../custom/twm-icon";

function Navigation() {
	return (
		<div className="fixed w-full top-5 z-50">
			<div className="border p-4 rounded-md mx-auto max-w-3xl flex items-center justify-between bg-background">
				<Link to="/">
					<TWMIcon className="fill-primary size-10" />
				</Link>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Leistungen</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4">
									<li>
										<NavigationMenuLink asChild>
											<Link
												to="/leistungen/sichtbarkeit-steigern"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													Sichtbarkeit steigern
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
									<li>
										<NavigationMenuLink asChild>
											<Link
												to="/leistungen/digitale-werbung"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													Digitale Werbung
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
									<li>
										<NavigationMenuLink asChild>
											<Link
												to="/leistungen/webseiten-branding"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													Webseiten & Branding
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
									<li>
										<NavigationMenuLink asChild>
											<Link
												to="/leistungen/ki-automatisierung"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													KI & Automatisierung
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link to="/ueber-uns" className={navigationMenuTriggerStyle()}>
									Über uns
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link to="/partner" className={navigationMenuTriggerStyle()}>
									Partner
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link to="/kontakt" className={navigationMenuTriggerStyle()}>
									Kontakt
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<ToneToggle />
			</div>
		</div>
	);
}

export default Navigation;
