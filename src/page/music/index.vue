<template>
  <div>
<!--    <audio autoplay="autoplay" id="music1">-->
<!--      <source src="../../images/1.mp3">-->
<!--    </audio>-->
    <audio id="audioPlay" src="/static/img/1.mp3"></audio>
    <div class="your_music_container">
      <h5>这些习惯伤害了你的肾脏健康，你有吗?</h5>
      <ul>
        <li>1、喝水少</li>
        <li>喝水少，尿量会减少，而尿液携带的废物和毒素浓度会增加，对肾造成伤害，容易引发肾结石等。</li>
        <li>2、爱吃肉</li>
        <li>肉吃多了，身体中的蛋白质会超标，而蛋白质代谢过程中会产生尿酸和尿素氮，会加重肾的排泄负担。</li>
        <li>3、过度劳累</li>
        <li>高强度的工作会导致身体出现疲劳，易引发肾虚；而工作和生活中的压力，也会导致大脑精神无法放松，用脑过度，担心多、思虑过多，也会伤肾。</li>
        <li>4、乱服药</li>
        <li>长期吃消炎镇痛药物，如去痛片、消炎痛等，容易损害肾脏健康。</li>
      </ul>
      <h5 style="margin-top: 1rem;">养护肾脏健康，这3个方法，你该懂：</h5>
      <ul>
        <li>1、多喝水</li>
        <li>可别小瞧水的威力，多喝水能冲淡尿液，让尿液快速排出，不仅能预防结石，还有利于尿液变淡，从而保护肾脏健康。</li>
        <li>2、健康饮食</li>
        <li>肾脏健康和日常饮食是密不可分的，有很多食物对肾脏健康是有所帮助的。如鲜白茅根、鸡内金、鱼腥草等食材，既是药材又是食物，常被用来养护肾脏健康、防治肾脏疾病。</li>
        <li>3、保持小便通常，不憋尿</li>
        <li>尿液在膀胱内储存过久，细菌会大量繁殖，引起尿道炎；长时间憋尿还会引起尿液返流导致肾盂肾炎，影响肾脏健康。所以，尿意一来，应及时去排尿。</li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'music',
    methods: {
      close() {
        var audio = document.getElementById('music1');
        console.log(audio.paused)
        if (audio.paused) {
          audio.play();  // 播放
        } else {
          // audio.pause();// 暂停
          audio.play();  // 播放
        }
      }
    }
  }
</script>
<style lang="less">
  body{
    padding-top: 1.2rem;
    background: #2b2b2b;
    padding-bottom: 2rem;
  }
  .your_music_container{
    color: #fff;
    h5{
      color: red;
      text-align: center;
    }
    li{
      font-size: 0.65rem;
      color: #fff;
      padding: 0.5rem 1rem 0 1rem;
    }
  }
</style>
