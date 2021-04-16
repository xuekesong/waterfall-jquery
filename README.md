# waterfall

利用jquery语法实现瀑布流的渲染，实现思想是：获取瀑布流的列数，除了第一排外其他图片都需要进行定位处理，首先将第一排的图片高度存放在数组中，然后得到数组中的**最小高度的索引值**，最小索引乘以图片宽度来实现对图片的居左定位，然后将数组中的最小值进行图片的高度叠加以实现对图片的高度定位。其中采用了`Math.min()`方法来获取数组中的最小值；用`$.inArray()`方法来查找数组中指定值，返回索引（未匹配返回-1）；因为图片具有padding样式，所以获取图片的宽度和高度采用了`outerWidth()`和`outerHeight()`来获取。