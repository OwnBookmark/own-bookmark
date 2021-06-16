<template>
  <v-card
      class="mx-auto"
      id="tag-box-outer"
  >
    <v-toolbar
        flat
        color="orange lighten-2"
        dark
    >
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Tags</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <div class="search-tag-input-outer">
        <input type="text" id="searchTagInput" @input="searchTag" v-model="searchInputValue">
      </div>

      <v-chip-group
          v-model="activeTags"
          column
          multiple
      >
        <transition-group
            name="tag-transition"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
            mode="in-out"
        >
          <v-chip
              filter
              outlined
              v-for="(tagItem,index) in searchTagArr" :key="index+'-only'"
              class="tag-chip"
              @click="getCurrentTag(tagItem)"
          >

            {{ tagItem }}
          </v-chip>

        </transition-group>

        <transition
            name="p-transition"
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutDown"
            mode="in-out"
        >
          <p v-if="searchResultIsEmpty" key="noResult">没有找到相关的标签</p>
        </transition>

      </v-chip-group>
    </v-card-text>

  </v-card>
</template>

<script>
import {tagsArr} from '@/mock/popup';
import {getIndexValue} from "../../utils/Globle";

export default {
  name: "TagBoxNew",
  props: {
    // 模糊搜索列表的单个项
    searchResultObj: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      activeTags: [],
      // 全局的已定义标签数组 tagsArr
      tagsArr: tagsArr,
      // 搜索标签结果数组
      searchTagArr: [],
      // 搜索框输入的值
      searchInputValue: "",
      // 搜索结果是否为空
      isEmpty: false
    }
  },
  mounted() {
    // 默认搜索结果为全局的的已定义标签数组 tagsArr
    this.searchTagArr = tagsArr;
    this.getActiveTags();
  },
  computed: {
    searchResultIsEmpty() {
      return this.isEmpty
    }
  },
  methods: {
    /**
     * @description 用于监听搜索框输入, 返回模糊搜索结果(忽略大小写)
     */
    searchTag() {
      // 初始化搜索结果为空
      this.searchTagArr = [];
      for (const tag of this.tagsArr) {
        // 如果已定义的标签数组中某一项包含当前输入的值,则将该项推到模糊搜索结果数组中(忽略大小写)
        if (tag.toLowerCase().indexOf(this.searchInputValue.toLowerCase()) !== -1) {
          this.searchTagArr.push(tag);
          this.isEmpty = false;
        }
        if (this.searchTagArr.length === 0) {
          this.isEmpty = true;
        }
      }
      this.getActiveTags();
    },
    /**
     * @description 用于获取当前选中的 tags
     */
    getActiveTags() {
      // 查询元素在数组中的索引值
      for (const tag of this.searchResultObj.tags) {
        let indexValue = getIndexValue(this.searchTagArr, tag);
        if (indexValue !== undefined) {
          this.activeTags.push(indexValue);
        }
      }
    },
    getCurrentTag(tagItem) {
      if (this.searchResultObj.tags.indexOf(tagItem) === -1) {
        this.searchResultObj.tags.push(tagItem);
      } else {
        let indexVal = getIndexValue(this.searchResultObj.tags, tagItem);
        this.searchResultObj.tags.splice(indexVal, 1);
      }
    }
  },
}
</script>

<style scoped lang="scss">
.animate__fadeIn {
  animation-duration: 0.6s;
}

.animate__fadeOut {
  animation-duration: 0.3s;
}

.animate__fadeInDown {
  animation-delay: 0.35s;
  animation-duration: 0.3s;
}

.animate__fadeOutDown {
  animation-duration: 0.3s;
}

.search-tag-input-outer {
  border: 1px solid #b4b1b1;
  border-radius: 12px;
  height: 30px;

  input {
    margin-left: 10px;
    font-size: 14px;
    min-width: 100px;
    width: 90%;
    height: 100%;
    border: none;
    outline: medium;
    background-color: transparent;
  }
}

.tag-chip {
  transition: all 0.3s;
}

#tag-box-outer {
  border-radius: 14px;
}
</style>