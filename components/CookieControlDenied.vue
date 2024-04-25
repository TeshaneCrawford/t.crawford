<script lang="ts" setup>
import { locale } from '~/config/cookie';
</script>

<template>
  <CookieIframe :locale="locale" />
</template>

<style lang="postcss" scoped>
	.cookieControl__BlockedIframe {
		@apply shadow-border border-0 rounded-box p-6;

		* {
			font: inherit !important;
		}

		a {
			/* Needs to be specified due to overriding issues. */
			font-size: inherit !important;
			line-height: inherit !important;
			font-weight: bold !important;
		}

		a {
			@apply underline font-semibold;
      @apply text-accent-700 decoration-accent-700/25 underline;
      @apply transition hover:text-accent-700/80;
		}
	}
</style>
