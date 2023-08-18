<script lang="ts">
	import Container from '$lib/components/web/container.svelte';
	import { Viewer, utils } from '@photo-sphere-viewer/core';
  import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
	import { onMount } from 'svelte';

	let viewerHTML: HTMLElement | null;

	const animatedValues = {
		pitch: { start: -Math.PI / 2, end: 0.2 },
		yaw: { start: Math.PI, end: 0 },
		zoom: { start: 0, end: 50 },
		fisheye: { start: 2, end: 0 }
	};

	onMount(() => {
		if (viewerHTML) {
			const viewer = new Viewer({
				container: viewerHTML,
				// container: "viewer",
				panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
				defaultPitch: animatedValues.pitch.start,
				defaultYaw: animatedValues.yaw.start,
				defaultZoomLvl: animatedValues.zoom.start,
				fisheye: animatedValues.fisheye.start,
				navbar: [
					'autorotate',
					'zoom',
					{
						title: 'Rerun animation',
						content: '🔄',
						onClick: intro
					},
					'caption',
					'fullscreen'
				],
				plugins: [
					[
						AutorotatePlugin,
						{
							autostartDelay: null,
							autostartOnIdle: false,
							autorotatePitch: animatedValues.pitch.end
						}
					]
				]
			});

			const autorotate = viewer.getPlugin(AutorotatePlugin) as any;

			viewer.addEventListener('ready', intro, { once: true });

			function intro() {
				autorotate.stop();

				new utils.Animation({
					properties: animatedValues,
					duration: 2500,
					easing: 'inOutQuad',
					onTick: (properties) => {
						viewer.setOption('fisheye', properties.fisheye);
						viewer.rotate({ yaw: properties.yaw, pitch: properties.pitch });
						viewer.zoom(properties.zoom);
					}
				}).then(() => {
					autorotate.start();
				});
			}
		}
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css"
	/>
</svelte:head>

<Container class="py-12">
	<div class="w-full h-[600px]">
		<div id="viewer" bind:this={viewerHTML} class="w-full h-[600px]" />
	</div>
</Container>
