##D3.js

### 链式调用
### 选择元素
    
- d3.select()：是选择所有指定元素的第一个
- d3.selectAll()：是选择指定元素的全部
- 关于 select 和 selectAll 的参数，其实是符合 CSS 选择器的条件的，即用“井号（#）”表示 id，用“点（.）”表示 class。
此外，对于已经绑定了数据的选择集，还有一种选择元素的方法，那就是灵活运用 function(d, i)。我们已经知道参数 i 是代表索引号的，于是便可以用条件判定语句来指定执行的元素。

```
var body = d3.select("body"); //选择文档中的body元素
```

### 绑定数据

- datum()：绑定一个数据到选择集上
- data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定


```
    
    var str = "China";

    var body = d3.select("body");
    var p = body.selectAll("p");

    p.datum(str);

    p.text(function(d, i){
        return "第 "+ i + " 个元素绑定的数据是 " + d;
    });
```

### 插入元素
插入元素涉及的函数有两个：

- append()：在选择集末尾插入元素
- insert()：在选择集前面插入元素


    body = d3.select('body')
    body.append('p')
        .text("我是添加的p标签")
    
    //insert()
    //在 body 中 id 为 myid 的元素前添加一个段落元素。
    body.insert("p","#myid")
        .text("insert p element");

### 删除元素
删除一个元素时，对于选择的元素，使用 remove 即可，例如：

```
var p = body.select("#myid");
p.remove();
```

