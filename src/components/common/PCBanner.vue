<template>
	<!--PC Banner-->
	<section class="pc-banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide swiper-slide-center none-effect">
					<a href="#">
						<img src="static/images/play/p3.jpg">
					</a>
					<div class="layer-mask"></div>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="static/images/play/p2.jpg">
					</a>
					<div class="layer-mask"></div>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="static/images/play/p1.jpg">
					</a>
					<div class="layer-mask"></div>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="static/images/play/p4.jpg">
					</a>
					<div class="layer-mask"></div>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="static/images/play/p5.jpg">
					</a>
					<div class="layer-mask"></div>
				</div>
			</div>
			<div class="button">
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
	</section>
</template>
<script type="text/javascript">

	window.onload = function() {
		var swiper = new Swiper('.swiper-container',{
			autoplay: false,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			loop: true,
			centeredSlides: true,
			slidesPerView: 2,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next',
			onInit: function(swiper) {
				swiper.slides[2].className = "swiper-slide swiper-slide-active";
			},
			breakpoints: {
				668: {
					slidesPerView: 1,
				}
			}
		});
	}
</script>
