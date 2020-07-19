<template>
  <div class="index_bg">
    <!-- 顶部固定 -->
    <header>
      <div class="container">
        <div class="head_tabs">
          <h1>君の名は</h1>
          <div>
            <img src="../../static/image/shouye.png" alt />
            首页
          </div>
          <div>
            <img src="../../static/image/classify.png" alt />
            分类
          </div>
          <div>
            <img src="../../static/image/label.png" alt />
            标签
          </div>
        </div>
        <div class="search">
          <input type="text" placeholder="搜索..." />
        </div>
      </div>
    </header>
    <!-- 内容主题 -->
    <main>
      <section>
        <!-- 统计 -->
        <div class="totals">
          <h1>博客</h1>
          <p>共({{blogs}})篇</p>
        </div>
        <!-- 内容 -->
        <div class="eassy">
          <div>
            <h3>这是一篇博客的标题</h3>
            <p>最近用springboot写了一个个人博客项目，正好之前趁着活动免费领取了一个阿里云的云服务器ecs，于是准备把项目部署到服务器上。对于我这种纯新手来说，部署过程可谓是踩坑无数,好在最后还是成功了。
                这里跟大家分享一下完整的步骤，尽量帮助大家排坑。......</p>
            <div class="origin">
              <div>
                <p>
                <img src="../../static/image/classify.png" alt />作者
                </p>
                <p>
                  <img src="../../static/image/classify.png" alt />2020-06-03
                </p>
                <p>
                  <img src="../../static/image/classify.png" alt />1232
                </p>
              </div>
              <p class="mesure">某种方法</p>
            </div>
          </div>
          <div class="picture">
            <img src="../../static/image/jjgw.jpg" alt />
          </div>
        </div>
        <!-- 右侧信息 -->
      </section>
      <aside>
        <div class="info">
          <img src="../../static/image/avatar.jpg" alt="">
          <h2>作者ID</h2>
          <p>KHGHLSDPRNFDK;F</p>
        </div>
        <p>rtwerterwt</p>
        <p>rtewrtewrt</p>
        <p>erwterwtrewterw</p>
        <p>terwtewttr</p>
      </aside>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: 10
    };
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.index_bg {
  overflow-x: auto;
  width: 100%;
  height: 97vh;
  background: url(../../static/image/index_bg.jpg) no-repeat;
  background-size: cover;
}
header {
  width: 100%;
  min-width: 1000px;
  background: rgba(255, 255, 255, .9);
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 0;
  .container {
    display: flex;
    justify-content: space-between;
    .head_tabs {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      h1 {
        color: #0d474d;
      }
      div {
        margin: 0 18px;
        font-size: 16px;
        display: flex;
        align-items: center;
        img {
          vertical-align: middle;
          width: 20px;
        }
      }
    }
    .search {
      display: flex;
      align-items: center;
      input {
        border: 0;
        height: 30px;
        background: url(../../static/image/search.png) no-repeat;
        background-position: 90% 45%;
        background-size: 12%;
      }
    }
  }
}
main {
  margin-top: 100px;
  height:auto;
  display: flex;
  justify-content: space-between;
  section {
    box-sizing: border-box;
    width: 60%;
    height: 100%;
    background-color: aliceblue;
    margin-left: 7%;
    border: 1px solid #000;
    .totals {
      display: flex;
      justify-content: space-between;
      padding:10px;
      border-bottom:1px solid #ccc;
    }
    .eassy {
      padding:10px;
      display: flex;
      justify-content: space-around;
      div{
        h3{
          margin-bottom:10px;
          padding: 5px;
        }
        p{
          margin-bottom:15px;
          padding: 0 5px;
        }
        .origin {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          div{
          display: flex;

          }
          .mesure{
            border:1px solid #1A94E6;
            color:#1A94E6;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            border-radius: 10px;
          }
          p{
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            img{
              vertical-align:middle;
              width: 20px;
              margin-right: 5px;
            }
          } 
        }
      }
      .picture{
        img{
          height:200px;
        }
      }
    }
  }
  aside{
    width: 25%;
    border:1px solid #fff;
    margin-right:7%;
    background: rgba(255, 255, 255, .8);
    div{
      text-align: center;
      img{
        width:40%;
        border-radius:50%;
        margin-top:20px;
      }
      p{
        font-size: 20px;
        margin:15px 20px;
        padding: 0 0 10px;
        border-bottom: 1px solid #aaa;
      }
    }
  }
}
</style>