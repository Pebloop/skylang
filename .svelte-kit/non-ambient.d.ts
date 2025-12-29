
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/dictionary" | "/grammar" | "/grammar/alphabet" | "/grammar/sentence" | "/write";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/dictionary": Record<string, never>;
			"/grammar": Record<string, never>;
			"/grammar/alphabet": Record<string, never>;
			"/grammar/sentence": Record<string, never>;
			"/write": Record<string, never>
		};
		Pathname(): "/" | "/dictionary" | "/dictionary/" | "/grammar" | "/grammar/" | "/grammar/alphabet" | "/grammar/alphabet/" | "/grammar/sentence" | "/grammar/sentence/" | "/write" | "/write/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Sealang-Regular.otf" | "/Sealang-Regular.ttf" | "/dictionary.json" | "/favicon.svg" | "/grammar/characters.png" | "/grammar/i_have_a_fish.png" | "/grammar/sea_dragon_patterns.png" | "/grammar/writing_disk.png" | string & {};
	}
}