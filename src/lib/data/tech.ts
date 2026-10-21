import {
	siDocker,
	siRust,
	siWebassembly,
	siZedindustries,
	siOnnx,
	type SimpleIcon,
	siSqlite,
	siSvelte,
	siTypescript
} from 'simple-icons';

export const tech = {
	rust: { label: 'Rust', icon: siRust },
	gpui: { label: 'GPUI, by Zed Industries', icon: siZedindustries },
	webassembly: { label: 'WebAssembly', icon: siWebassembly },
	docker: { label: 'Docker', icon: siDocker },
	onnx: { label: 'ONNX', icon: siOnnx },
	sqlite: { label: 'SQLite', icon: siSqlite },
	svelte: { label: 'Svelte', icon: siSvelte },
	typescript: { label: 'TypeScript', icon: siTypescript }
} satisfies Record<string, { label: string; icon: SimpleIcon }>;

export type Tech = keyof typeof tech;
