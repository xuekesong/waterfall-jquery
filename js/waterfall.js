$(function () {
  waterfall();
});

function waterfall () {
  // 1. 获取瀑布流列数
  var box = $('.box');
  var boxWidth = box.outerWidth();
  var clientWWidth = $(window).width();
  // 求出列数
  var cols = parseInt(clientWWidth / boxWidth);
  // 2. 获取最小高度
  // 创建数组
  var heightArr = [];
  // 图片遍历循环，除了第一排不需要定位，去高度值，其他的都需要进行定位处理
  $.each(box, function (index, item) {
    // 获取图片高度
    var boxHeight = $(item).outerHeight();
    
    if (index < cols) { // 第一行 样式不需要处理
      heightArr[index] = boxHeight;
    } else {
      // 获取数组中的最小值
      var minBoxHeight = Math.min(...heightArr);
      // 获取最小的索引 $.inArray() 用于查找数组中指定值，返回索引（未匹配返回-1）
      var minBoxIndex = $.inArray(minBoxHeight, heightArr);
      console.log(minBoxIndex, boxWidth)
      $(item).css({
        position: 'absolute',
        left: minBoxIndex * boxWidth + 'px',
        top: minBoxHeight + 'px'
      })
      // 高度增加
      heightArr[minBoxIndex] += boxHeight;
    }
  })
}