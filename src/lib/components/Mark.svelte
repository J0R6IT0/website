<script lang="ts">
	let { size = 40 }: { size?: number } = $props();
</script>

<svg
	class="block shrink-0"
	viewBox="-150 -160 300 262"
	width={size}
	height={(size * 262) / 300}
	aria-hidden="true"
	focusable="false"
>
	<g stroke="#000" stroke-width="5" stroke-linejoin="round">
		<polygon
			points="-20.44,-152.89 21.88,-153.06 141.09,56.33 -54.79,57.33 -33.08,20.48 79.25,19.86"
			fill="#fff"
		/>
		<polygon
			points="142.63,58.74 121.61,95.48 -119.33,94.02 -22.25,-76.11 -1.20,-38.89 -56.82,58.70"
			fill="#000"
		/>
		<polygon
			points="-122.19,94.15 -143.49,57.58 -21.76,-150.35 77.04,18.78 34.28,18.41 -22.43,-78.56"
			fill="#7D7E7C"
		/>
	</g>
</svg>
