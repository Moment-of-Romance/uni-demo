<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view>
			<text>这是token{{ isAuthenticated }}</text>
		</view>
	</view>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	export default {
		data() {
			return {
				title: 'add vuex'
			}
		},
		computed: {
			...mapGetters('auth', ['isAuthenticated'])
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
