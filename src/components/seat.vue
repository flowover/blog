<template>
  <div>
    <div class="app">
      <!-- <div class="room">
        <div class="tip">
          <img src="../../static/image/chose.png" /> <span>选中座位</span>
          <img src="../../static/image/canchose.png" /> <span>可选座位</span>
          <img src="../../static/image/notchose.png" /> <span>已选座位</span>
        </div>
        <div class="movie">观影大银幕 <hr style="width:80%;"> </div>
        <div class="seat" v-for="(item,i) in list" :key="i">
          <div class="sit bg-nosit">{{i+1}}</div>
          <div @click="selectSeat(item1,i,j)" v-for="(item1,j) in item" :key="j" :class="['sit',{'bg-temp':item1==3},{'bg-sited':item1==2},{'bg-sit':item1==1},{'bg-nosit':item1==0}]"></div>
        </div>
      </div> -->
      <div class="content"></div>
      <!-- <button @click="show1">点击弹窗</button> -->
      <el-button type="text" @click="show">点击打开 Message Box</el-button>
    </div>
      <taba class="center" :cccccc="editDisplay"></taba>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  components: {
    taba : tab
  },
  data() {
    return {
      msg: "",
      display: false,
      editDisplay: false,
      list: [
						[1, 1, 2, 2, 1, 0, 1, 2, 1, 1],
						[1, 1, 2, 2, 1, 2, 1, 2, 1, 0],
						[1, 1, 2, 2, 1, 0, 1, 2, 1, 1],
						[1, 1, 2, 0, 1, 0, 1, 2, 1, 1],
						[0, 1, 2, 2, 1, 0, 1, 2, 1, 2],
						[0, 1, 2, 2, 1, 0, 1, 2, 1, 0],
						[0, 1, 2, 2, 1, 2, 1, 2, 1, 1],
						[1, 1, 2, 2, 1, 2, 1, 2, 1, 0],
						[1, 1, 2, 2, 1, 1, 1, 2, 1, 0],
						[1, 1, 2, 2, 1, 1, 1, 2, 1, 0]
          ],
        //已选座位数
         msgCount:0,
        //选座信息
         msg:[] 
    };
  },
  methods: {
    selectSeat (data, x, y) {
      if (data == 1 && this.msgCount <= 3) {
          this.$set(this.msg, this.msgCount++, [x, y]);
          this.list[x][y] = 3;
          console.log(this.list[x][y], this.list)
          // }
        } else if (this.list[x][y] == 3) {
          // console.log(456,this.msg)
          // 用于记录要删除的座位下标
          var temp = null;
          for (var i = 0; i < this.msg.length; i++) {
            if (this.msg[i][0] == x && this.msg[i][1] == y) {
              temp = i;
              break;
            }
          }
          this.msgCount--;
          this.$delete(this.msg, temp);
          this.list[x][y] = 1;
        }
        // else {
        //   if (this.msgCount == 4) {
        //     // layer.msg("最多只能订4张票！");
        //     alert("最多只能订4张票！")
        //   }
        // }
    },
    show(){
      this.editDisplay = true
      console.log(2365, this.editDisplay)
    },
     show1(){
      // this.editDisplay = true
      console.log(8965)
    }
  }
};
</script>

<style scoped>
.app{
  min-width: 530px;
}
.bg-nosit{
}
.bg-sited{
  background-size: 26px;
  background-image: url(../../static/image/notchose.png);
}
.bg-sit{
  background-size: 26px;
  background-image: url(../../static/image/canchose.png);
}
.bg-temp{
  background-size: 26px;
  background-image: url(../../static/image/chose.png);
}
.sit{
  height: 21px;
	width: 26px;
  margin:0px 4px 0px 4px;
  text-align: left;
  /* background-size: cover; */
  display:inline-block;
}
img{
  width:18px;
}
.seat{
  width:75%;
  margin:4px auto;
}
.center{

}
</style>
