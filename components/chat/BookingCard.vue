<script lang="ts" setup></script>

<template>
  <ClientOnly>
    <div class="border-b">
      <section class="shadow-sm first:mt-0 last:mb-0 rounded-sm">
        <div class="flex flex-col md:flex-row gap-6 md:items-center">
          <div class="flex-1">
							<h2 class="font-semibold text-lg mb-2">Book a free call</h2>
							<p>Let's talk about your project and how I can help you.</p>
						</div>
						<NuxtLink
							:href="useRuntimeConfig().public.calcomUrl"
							external
							target="_blank"
							class="UIButton w-full md:w-auto"
							>Book now</NuxtLink
						>
        </div>
        <PrivacyNotice>
						By clicking the button, you agree to my
						<NuxtLink :to="{ name: 'imprint' }" target="_blank" class="UILink">
							Privacy Policy
						</NuxtLink>
						and the
						<NuxtLink href="https://cal.com/de/privacy" external target="_blank" class="UILink">
							cal.com Privacy Policy
						</NuxtLink>
					</PrivacyNotice>
      </section>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
