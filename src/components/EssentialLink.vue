<template>
	<div>
		<q-item
			clickable
			tag="a"
			:to="link"
			@click="setTitleHeader"
		>
			<q-item-section
				v-if="icon"
				avatar
			>
				<q-icon :name="icon"/>
			</q-item-section>

			<q-item-section>
				<q-item-label>{{ title }}</q-item-label>
				<q-item-label caption>
					{{ caption }}
				</q-item-label>
			</q-item-section>
		</q-item>
		<q-separator/>
	</div>
</template>

<script>
	export default {
		name: 'EssentialLink',
		props: {
			title: {
				type: String,
				required: true
			},

			caption: {
				type: String,
				default: ''
			},

			link: {
				type: String,
				default: '#'
			},

			icon: {
				type: String,
				default: ''
			},

			titleHeader: {
				type: String,
				default: ''
			}
		},

		methods: {
			setTitleHeader() {
				this.$store.commit('titleHeader/setTitleHeader', this.$props.titleHeader);
			}
		}
	};
</script>
