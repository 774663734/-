$(function() {
	//canvas背景部分
	$('#particles').particleground({
		dotColor: '#5cbdaa',
		lineColor: '#5cbdaa'
	});

	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(121.4945640000, 31.3114300000);
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	map.centerAndZoom(point, 15);
	var opts = {
		width: 200, // 信息窗口宽度
		height: 100, // 信息窗口高度
		title: "我的位置", // 信息窗口标题
		enableMessage: true, //设置允许信息窗发送短息
		message: "所在位置"
	}
	var infoWindow = new BMap.InfoWindow("地址：就住在三号线江湾镇地铁站附近，只要家距公司不超过一个多小时都可以考虑。", opts); // 创建信息窗口对象 
	marker.addEventListener("click", function() {
		map.openInfoWindow(infoWindow, point); //开启信息窗口
	});
});