<template>
	<div class="Play">
		<v-PCBanner></v-PCBanner>
	</div>
</template>
<script>
import bus from '@/components/common/bus';
import vPCBanner from '@/components/common/PCBanner.vue';
 export default {
    data(){
          return {
              collapse: false
          }
      },
      components:{
          vPCBanner
      },
      created(){
          bus.$on('collapse', msg => {
              this.collapse = msg;
          })
      }
  }
</script>
<style>
	.Play{
		position: relative;
	    overflow: hidden;
	    width: 100%;
	}

</style>