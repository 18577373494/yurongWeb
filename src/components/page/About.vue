<template>
	<div class="About">
		<!-- banner -->
        <v-banner></v-banner>
        <!--banner-->
        <div class="banner-bottom container-fluid">
            <div class="container">
                <div class="main">
                    <div class="seven-content">
                        <div class="shuxin">
                            <dl >
                                <dt></dt>
                                <dt>
								    <p>罗山湖风情岛是一座复原、展示、体验广西11个主要民族文化、文物、社会生活的主题型景区。</p>
								    <br/>
								    <br/>
								    <p>风情岛位于罗山湖水库中，四季花草簇拥，山水交映；园内规划建设广西（壮、侗、苗、瑶、京、回、彝、毛南、仡佬、水、仫佬等）11个主要民族符号的专业游览园区。</p>
								    <br/>
								    <br/>
								    <p>民族图腾广场是由12根象征广西12个民族的石雕图腾柱组成。</p>
								    <br/>
								    <br/>
								    <p>人们总会问：12图腾与汉族12生肖有什么关联？这里就要追溯到盘古开天混沌造物的时代，如此民族共性的秘密，就需要大家一起来感受研究了</p>
								    <br/>
								    <br/>
                                    <p>壮族文化苑全面展现了壮族的居家之乐，壮锦之秀，银饰之光，鼓（铜鼓）乐之美。</p>
                                    <br/>
                                    <br/>
                                    <p>花山岩画是广西壮族自治区唯 一的世界文化遗产，系战国至东汉时期岭南左江流域当地壮族先民骆越人群体祭祀遗留下来的遗迹。</p>
                                    <br/>
                                    <br/>
                                    <p>侗族文化三件宝——鼓楼、大歌和花桥。侗族鼓楼是侗乡具有独特风格的建筑物，座座高耸于侗寨之中，巍然挺立，气概雄伟。</p>
                                    <br/>
                                    <br/>
                                    <p>芦笙是苗族传统的簧管乐器，也是苗族文化的一种象征，在表演吹奏方面把词、曲、舞三者融为一体，保持了苗族历史文化艺术的原始性。</p>
                               </dt>
                            </dl>
                        </div>  
                    </div> 
                </div>
            </div>
            <div class="subbot">当前位置：<a><li class="">关于罗山湖</li></a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;罗山湖简介</div>
        </div>
	</div>
</template>
<script>
import vBanner from '../common/Banner.vue';
import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: false
            }
        },
        components:{
            vBanner
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>