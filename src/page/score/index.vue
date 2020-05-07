<template>
  	<div>
    	<div class="your_scores_container">
            <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></header>
            <div class="result_tip">{{scoreTips}}</div>
        </div>
<!--        <div class="share_button" @click="showCover"></div>-->
        <div class="share_code">
            <header @click="showCover" class="share_header">关注链康，获取最新信息。</header>
        </div>
<!--        <div class="share_cover" v-show="showHide" @click="showCover">-->
<!--            <img src="../../images/5-2.png" class="share_img">-->
<!--        </div>-->
  	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: 'score',
    data(){
        return {
            showHide: false, //是否显示提示
            score: 0, //分数
            scoreTips:'', //分数提示
            // rightAnswer: [1, 5, 9, 13, 17], //正确答案
            scoreTipsArr:['您需要了解下自己的身体了','还不错，但还需要继续加油哦！','还有进步的空间！','里健康爆表只差一步了！','您对自己的身体很了解！'],
        }
    },
    computed: mapState(['answerid']),
	created(){
        this.computedScore();
        this.getScoreTip();
        document.body.style.backgroundImage = 'url(./static/img/4-1.jpg)';
    },
    methods: {
        //计算分数
        computedScore(){
            this.answerid.forEach((item, index) => {
              console.log(item+'item')
              console.log(index+'index')
                // if (item == this.rightAnswer[index]) {
                    this.score += item;
                // }
            })
        },
        //是否显示分享提示
        showCover: function (){
            this.showHide = !this.showHide;
        },
        //跳转音乐页面
        showCover(){
          this.$router.push('music')
        },
        //根据分数显示提示
        getScoreTip: function (){
          let index = Math.ceil(this.score/20)-1;
          this.scoreTips = this.scoreTipsArr[index];
        }
    },
}

</script>

<style lang="less">
    body{
        background-image: url(../../images/4-1.jpg);
        padding-top: 1.2rem;
    }
    .your_scores_container{
        width: 9.7rem;
        height: 9.1rem;
        background: url(../../images/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 4.7rem;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #412318;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
            .fenshu{
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 7rem;
            width: 9rem;
            left: 0.6rem;
            color: #3e2415;
            font-size: 0.65rem;
            text-align: center;
        }
    }
    .share_button{
        width: 6.025rem;
        height: 2.4rem;
        margin: 0.8rem auto 0;
        background: url(../../images/4-3.png) no-repeat 0.4rem 0;
        background-size: 5.825rem 100%;
    }
    .share_code{
        width: 9.3rem;
        margin: 6rem auto 0;
        .share_header{
          color: #664718;
          font-size: 0.475rem;
          font-family: 'Microsoft YaHei';
          width: 100%;
          height: 2rem;
          background-color: #fff;
          font-weight: 500;
          text-align: center;
          border-radius: 5rem;
          line-height: 2rem;
          box-shadow: 4px 4px 0 #5b3013;
        }
        .code_img{
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../images/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>
