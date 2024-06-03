<script lang="ts" setup>
	const turnstileIsPermitted = computed(() => useIsCookiePermitted('cloudflare'))
	const turnstileRef = ref()
	const turnstileToken = ref()
	const turnstileIsDone = computed(() => {
		if (!turnstileIsPermitted.value) return false
		return !!turnstileToken.value?.length
	})

	const state = reactive({
		form: {
			name: '',
			email: '',
			message: '',
		},
		status: 'idle' as 'idle' | 'pending' | 'success' | 'error' | null,
	})

	const send = async () => {
		try {
			state.status = 'pending'
			if (!turnstileToken.value) throw new Error('No turnstile token')

			await $fetch('/api/contactEmail', {
				method: 'POST',
				body: {
					name: state.form.name,
					email: state.form.email,
					message: state.form.message,
					turnstileToken: turnstileToken.value,
				},
			})

			state.status = 'success'
			turnstileRef.value?.reset()
		} catch (error) {
			state.status = 'error'
		}
	}

	useSeoMeta({
		title: 'Contact',
	})
</script>

<template>
		<ClientOnly>
			<div class="mt-8 mb-16 border-b pb-16">
				<section class="bg-frost-200 dark:bg-transparent p-6 shadow-border dark:border first:mt-0 last:mb-0 rounded-2xl">
					<div class="flex flex-col md:flex-row gap-6 md:items-center">
						<div class="flex-1">
							<h2 class="H3Like mb-2">Book a free call</h2>
							<p>Let's talk about your project and how I can help you.</p>
						</div>
						<NuxtLink
							to="/"
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
						<!-- and the
						<NuxtLink href="https://cal.com/de/privacy" external target="_blank" class="UILink">
							cal.com Privacy Policy
						</NuxtLink> -->
					</PrivacyNotice>
				</section>
			</div>

			<form @submit.prevent="send">
				<h2 class="H3Like">Or send me some words</h2>
				<div class="flex gap-6 flex-col mt-8">
					<div class="flex flex-col md:flex-row gap-6">
						<input v-model="state.form.name" type="text" placeholder="Name" required class="UIInput dark:bg-transparent dark:border" >
						<input v-model="state.form.email" type="email" placeholder="Email" required class="UIInput dark:bg-transparent dark:border" >
					</div>
					<textarea v-model="state.form.message" placeholder="Message" required rows="5" class="UIInput dark:bg-transparent dark:border" />
				</div>

				<div class="flex justify-between flex-wrap gap-8 mt-8 mb-4">
					<div class="order-2 md:order-1">
						<Turnstile
							v-if="turnstileIsPermitted"
							ref="turnstileRef"
							v-model="turnstileToken"
							:options="{
								theme: 'light',
							}" />

						<CookieControlDenied v-else />

						<PrivacyNotice>
							By submitting this form, you agree to my
							<NuxtLink :to="{ name: 'imprint' }" target="_blank" class="UILink">
								Privacy Policy
							</NuxtLink>
						</PrivacyNotice>
					</div>

					<button :disabled="!turnstileIsDone" class="order-1 md:order-2 w-full md:w-[33%] UIButton">
						Send!
					</button>
				</div>
			</form>

			<div v-if="state.status === 'success'" class="mt-8 text-green-700 font-bold">
				Your message has been sent!
			</div>
			<div v-if="state.status === 'error'" class="mt-8 text-red-700 font-bold">An error occurred!</div>
			<div v-if="state.status === 'pending'" class="mt-8 text-gray-body font-bold">Please wait...</div>
		</ClientOnly>
</template>

<style scoped></style>
