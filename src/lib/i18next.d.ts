import "i18next";
import type translation from "./dict/formal.json";
import type { defaultNS } from "./i18n";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: {
			translation: typeof translation;
		};
	}
}
