# 认识Vuejs



# 为什么学习Vuejs

我相信每个人学习Vue的目的是各不相同的。

可能你的公司正要将原有的项目使用Vue进行重构。

也可能是你的公司新项目决定使用Vue的技术栈。

当然，如果你现在正在换工作，你会发现招聘前端的需求中，10个有8个都对Vue有或多或少的要求。

当然，作为学习者我们知道Vuejs目前非常火，可以说是前端必备的一个技能。

## 招聘需求

![1558692121858](assets/1558692121858.png)

![1558692148607](assets/1558692148607.png)

![1558692156598](assets/1558692156598.png)

![1558692166376](assets/1558692166376.png)

## 简单认识一下Vuejs

**Vue (读音 /vjuː/，类似于 view)，不要读错。**

Vue是一个渐进式的框架，什么是渐进式的呢？

1. 渐进式意味着你可以将Vue作为你应用的一部分嵌入其中，带来更丰富的交互体验。
2. 或者如果你希望将更多的业务逻辑使用Vue实现，那么Vue的核心库以及其生态系统。
3. 比如Core+Vue-router+Vuex，也可以满足你各种各样的需求。

**Vue有很多特点和Web开发中常见的高级功能**

1. 解耦视图和数据
2. 可复用的组件
3. 前端路由技术
4. 状态管理
5. 虚拟DOM

这些特点，你不需要一个个去记住，我们在后面的学习和开发中都会慢慢体会到的，一些技术点我也会在后面进行讲解。

**学习Vuejs的前提？**

- 从零学习Vue开发，并不需要你具备其他类似于Angular、React，甚至是jQuery的经验。
- 但是你需要具备一定的HTML、CSS、JavaScript基础。

## Vuejs安装方式

> 使用一个框架，我们第一步要做什么呢？安装下载它
>
> 安装Vue的方式有很多：

**方式一：直接CDN引入(我们刚开始就用这个来去学习基础语法)**

你可以选择引入开发环境版本还是生产环境版本

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 --> 
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

方式二：下载和引入

```html
开发环境 
https://vuejs.org/js/vue.js 
生产环境 
https://vuejs.org/js/vue.min.js
```

方式三：NPM安装

> 后续通过webpack和CLI的使用，我们使用该方式。

# Vue学习

## 前提对比jquery/js学习

**学习目标，我们学习Vue为了更好的体验，我们是对比着我们的jquery来进行学习。这样的话，既可以体会一下Vue的强大，又可以看出Vue和jquery的区别。**

# 初体验

## 需求

将js中的数据显示到html当中

## js版

```html
<div>
    <span id="box"></span>
</div>
<script>
	var str = "你好"
    var obox = document.getElementById('box');
    obox.innerHTML = str;
</script>
```

## Vue版

```html
<div id="app">
   <span>
    {{ str }}
   </span>
</div>
<script>
var vm = new Vue({
    el:"#app",
    data:{
        str:"你好"
    }
})
</script>
```

<http://jsrun.net/QbyKp>

在学习Vue版本时要注意，我们是先将data写好。el先不要去写。将数据直接通过 {{str}}的形式书写在模板上。然后去展示。

最后发现问题，数据没有显示到html中。那么和上面差了哪一步。其实我们只是定义了数据，没有将数据和html结合。我们可以通过el:"#app" 和html绑定关系 ，最终实现数据呈现。

综上我们可以发现我们将{{str}}放到哪个位置，哪个位置就可以显示数据。相比js而言。我们这里面就能够体会和js相比，我们可以通过{{}} 来实现将js中的数据显示到html中。

如下：

```html
<div id="app">
    {{ str }} {{ str }}
   <span>
    {{ str }}
   </span>
</div>
<script>
var vm = new Vue({
    el:"#app",
    data:{
        str:"你好"
    }
})
</script>
```

<http://jsrun.net/PbyKp>

## 总结：

从上面我们可以知道Vue是**声明式**数据的写法，而原生JS是**命令式**的写法。

## 体验增强

> data中的数据不仅仅是字符串，也可以是对象或者数组，现在我们先体验对象。

```html
<div  id="app">
    <span>姓名：{{ people.name }} 年龄：{{people.age}} 性别：{{people.sex}}</span>
</div>
<script>
  var vm = new Vue({
    el:'#app',
    data:{
      people:{
        name:'小伟',
        age:18,
        sex:'男'
      }
    }
  })
</script>
```

# 再体验

> 在输入框输入数据，会显示到span元素内部
>
> 也通过js和vue版去对比学习。

## js版

```html
<div>
    <input type="text" id="input">
    <span id="box"></span>
</div>
<script>
  var oinput = document.getElementById('input')
  var obox = document.getElementById('box');
  oinput.oninput = function () {
    obox.innerHTML = this.value;
  }
</script>
```

## Vue版

```html
<div id="app">
    <input type="text" v-model="str">
    <span>{{ str }}</span>
</div>
<script src="vue.js"></script>
<script>
  var vm = new Vue({
    el:'#app',
    data:{
      str:'你好'
    }
  })
</script>
```

> **这里面的v-model 其实就是专门 针对表单做的处理方式。**

# 注意事项

> el绑定的元素不可以是body或者html

![1558701567838](assets/1558701567838.png)

# 插值深入学习

插值 ，其实就是{{}}语法，又称mustache语法[ˈmʌstæʃ]。本义 胡须。

插值语法，其实就是{{}}内部可以书写js的简单操作，其实也就是相当于js的表达式。加减乘除，数组操作，函数执行等。

## 简易购物车

> 简易购物车，这里面只是为了体验一下插值语法，
>
> 要注意，我们在进行加减乘除时候这里面的通过表单设置的数据都是字符串要乘以1，再进行加减乘除运算才好。
>
> 也可以通过其它方式。v-model.number强制修改成为数字。

![1558705986524](assets/1558705986524.png)

```html
<link rel="stylesheet" href="bootstrap.min.css">

<div class="container" id="app">
    <div class="table">
        <table class="table">
            <thead>
                <tr>
                    <th>商品信息	</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>运费</th>
                    <th>金额</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="cart.png" alt=""></td>
                    <td><input type="number" v-model="price"></td>
                    <td><input type="number" v-model="num"></td>
                    <td><input type="number" v-model="trans"></td>
                    <td>¥ {{ price*num + trans*1 }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<script>
    var vm = new Vue({
        el:'#app',
        data:{
            price:15,
            num:1,
            trans:5
        }
    })
</script>
```

## 进阶(了解)

如果要纠结于这个结构不够完美，那么可以把表达式/插值语法改的更完美一些。后面会有更好的方法帮助我们去学习。

```
<td>¥ {{ price*num + (num*1>0?trans*1:0) }}</td>
```

# 体验指令（了解）

从上面我们可以发现当网页比较慢的时候，js还没有加载完时，会出现 一闪的情况。

![](assets/000000000000000000001.gif)

## 解决办法01：

> 通过指令实现：指令是书写在html标签身上的功能。是Vue框架赋予了这个属性的一些功能。
>
> 特点：书写在标签属性上，当网络不友好时，也不显示其它字符，等全部加载完，再显示到页面中。

`v-html` 或者`v-text`

```html
<div id="app">
    <span v-text="str"></span>
</div>
<script src="vue.js"></script>
<script>
    var vm = new Vue({
        el:'#app',
        data:{
            str:'你好'
        }
    })
</script>
```

> 方法1固然好，不过也会带来麻烦 。因为我们在html标签的内容通过{{}}语法书写内容，非常灵活。而写在v-text内部会显得臃肿，而且效果还要进行字符串拼接。

如下：

```html
<div id="app">
    <span>{{str}}你好</span>
</div>
```

```html
<div id="app">
    <span v-text="str+'你好'"></span>
</div>
```

## 解决办法02：斗篷（隐身衣）

新方法v-cloak：

> 书写样式[v-cloak]可以让书写vue代码的部分全部隐藏。等Vue代码加载和编译完全，会让其显示出来。这样就不会有跳的感觉。

```html
<style>
    [v-cloak]{display: none;}
</style>
<div id="app" v-cloak>
    <span>{{str}}</span>
</div>
<script src="vue.js"></script>
<script>
    var vm = new Vue({
        el:'#app',
        data:{
            str:'你好'
        }
    })
</script>
```

# 元素切换显示

![](assets/000000000000000000002.gif)

```html
<style>
    span{display: block;width: 200px; height: 200px;background: pink;}
</style>
<div id="app" >
    <button @click="toggle()">按钮</button>
    <span v-show="status"></span>
</div>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      status:false
    },
    methods:{
      toggle(){
        this.status = !this.status;
      }
    }
  })
</script>
```

## 功能分析

### v-show指令

首先v-show指令当值为true则为显示，值为false则为隐藏。

### 绑定事件

**分析**

**元素之所以可以显示原因是因为status的值为true。也就是说我们将这个数据改为false它就隐藏。我们操作button绑定的功能只要把status的值改变即可。**

> **直接将事件书写在模板中 v-on:click="指令名称()" 或者简写为 @click="指令名称()"**
>
> **指令名称对应的方法要号在js中的methods中，这里面写的方式是es6的简写方法，要和大家简单解释即可。**
>
> **在指令中想要访问data中的数据是通过  this 直接加上属性名称即可。如this.status.**
>
> 其中指令名称()的小括号 写不写都可以，不过要是传参的话，必须带小括号。后面会详细讲

```
data: {
	status:false
},
methods:{
    toggle(){
    this.status = !this.status;
}
```

# 事件修饰符

**事件修饰符这系列东西比较散碎，我们遇到什么再仔细说明即可。官网文档整理的比较细。我们在学习时候还是以能够明白而且应用为准。**

## 事件冒泡和阻止默认行为

```html
<style>
    #box1{
        width: 300px;
        height: 300px;
        background: pink;}
    #box2{
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    #box3{
        width: 200px;
        height: 200px;
        background: skyblue;
    }
</style>
<div id="app">
    <div id="box1" @click="box1">
        box1
        <div id="box2" @click.stop="box2">
            box2
        </div>
    </div>
    <div id="box3" @contextmenu.prevent="box3">
        禁止鼠标右键
    </div>
</div>
<script>
    var vm = new Vue({
        el:'#app',
        methods:{
            box1(){
                alert(1)
            },
            box2(){
                alert(2)
            },
            box3(){
                alert(3)
            }
        }
    })
</script>
```





























