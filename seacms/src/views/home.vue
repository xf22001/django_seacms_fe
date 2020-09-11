<template>
<div class="app-container">
    <div class="support-grid"></div>
    <div class="band">
        <div v-for="item in list" :key="item.pk">
            <a @click.prevent="handleLink(item.pk)"
                class="card">
                <div class="thumb" :style="iconName(item.fields.v_pic)"></div>
                <article>
                    <h1>{{item.fields.v_name}}</h1>
                </article>
            </a>
        </div>
    </div>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="2"
      :page-sizes="[20, 50, 100]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
</div>
</template>

<script>
import seacms from '@/api/seacms'

export default {
  data () {
    return {
      list: null,
      listLoading: true,
      currentDate: new Date()
    }
  },
  created () {
    console.log(this, 'created')
    this.fetchData({})
  },
  methods: {
    fetchData (data) {
      this.listLoading = true
      seacms.list(data).then(response => {
        console.log('response', response.items[0].fields)
        this.list = response.items
        this.listLoading = false
      })
    },
    iconName (pic) {
      return 'background-image: url(' + pic + ');'
    },
    handleLink (pk) {
      console.log('pk', pk)
      this.$router.push('/detail/' + pk)
    },
    handleSizeChange (val) {
      console.log('handleSizeChange', val)
    },
    handleCurrentChange (val) {
      console.log('handleCurrentChange', val)
    }
  }
}
</script>

<style>
html {
    background: #f5f7f8;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 20px 0;
}

.band {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
}

/* @media only screen and (min-width: 500px) {
    .band {
        grid-template-columns: 1fr 1fr;
    }
    .item-1 {
        grid-column: 1/ span 2;
    }
    .item-1 h1 {
        font-size: 30px;
    }
} */

@media only screen and (min-width: 720px) {
    .band {
        grid-template-columns: repeat(5, 1fr);
    }
}

.band div {
    width: 90%;
}

/* card */

.card {
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #444;
    position: relative;
    top: 0;
    transition: all .1s ease-in;
}

.card:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

.card article {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
}

.card .thumb {
    width:100%;
    padding-bottom: 80%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    /* background-size: 100% 100%; */
    /* -moz-background-size: 100% 100%; */
}

.card p {
    flex: 1;
    /* make p grow to fill available space*/
    line-height: 1.4;
}

/* typography */

h1 {
    font-size: 20px;
    margin: 0;
    color: #333;
}

.card span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
}
</style>
