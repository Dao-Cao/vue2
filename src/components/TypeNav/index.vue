<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click.prevent.stop="gosearch">
              <div
                class="item"
                v-for="(c1, index1) in categoryList"
                v-bind:key="c1.categoryId"
                :class="{ cur: currentIndex == index1 }"
              >
                <h3 @mouseenter="changeIndex(index1)">
                  <a
                    href=""
                    :data-categroyId1="index1"
                    :data-categoryName="c1.categoryName"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex == index1 ? 'block' : 'none',
                  }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index2) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          href=""
                          :data-categroyId2="index2"
                          :data-categoryName="c2.categoryName"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index3) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            href=""
                            :data-categroyId3="index3"
                            :data-categoryName="c3.categoryName"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  created() {
    //alert(123);
    //console.log(123);
    //this.$store.dispatch("categoryList");
    if (this.$route.path.indexOf("/search") > -1) {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //不要用箭头函数
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveShow() {
      this.currentIndex = -1;
      if (this.$route.path.indexOf("/search") > -1) {
        this.show = false;
      }
    },
    enterShow() {
      if (this.$route.path.indexOf("/search") > -1) {
        this.show = true;
      }
    },
    gosearch(event) {
      //最好的解决方法是 事件的委派
      //利用事件委派的问题:
      let element = event.target;
      let { categoryname, categroyid1, categroyid2, categroyid3 } =
        element.dataset;

      if (categoryname) {
        let localtion = { name: "search" };
        let query = { categoryName: categoryname };

        if (categroyid1) {
          query.categroyId1 = categroyid1;
        } else if (categroyid2) {
          query.categroyId2 = categroyid2;
        } else {
          query.categroyId3 = categroyid3;
        }
        localtion.query = query;

        if (this.$route.params) {
          localtion.params = this.$route.params;
        }

        this.$router.push(localtion);
        // this.$router.push({
        //        name:"search",
        //       //  params:{keyword:this.keyword},
        //       params:{keyword:''|| undefined}, //空字符串的解决
        //        query:{key:'123'}
        //     })
      }
    },
  },
};
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter{
       height: 0px;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>