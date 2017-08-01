// 获取ID号
function id(obj) {
    return document.getElementById(obj);
}
//绑定事件
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
// 获取屏幕宽度高度
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
// 添加class
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}
// 删除class
function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

    var provinceArr = [];
    provinceArr[0] = ["广东省"];
    provinceArr[1] = ["湖北省"];
    provinceArr[2] = ["北京市"];

    var cityArr = [];
    cityArr[0] = ['广州市', '佛山市', '东莞市', '中山市'];
    cityArr[1] = ['武汉市', '宜昌市', '荆门市', '荆州市', '咸宁市'];
    cityArr[2] = ["北京市"];

    //当省份的选择发生变化时调用 该方法   将市县加载到下拉选择框
        function getCity()
        {
            //1.获取省份选择框的对象
            var provincesobj=document.getElementById("province");
            //2.获取市县选择框的对象
            var cityobj=document.getElementById("city");
            //3.获取被选择的省份的索引
            var index=provincesobj.selectedIndex;
            
            //alert(provincesobj[index].value+","+provincesobj[index].text);
            ////4.通过省份的索引获取它的value值，value值也是它在数组的索引值
            var value=provincesobj[index].value;;
            
            //5.获取对应省份的市县数组
            var cityName=cityArr[value];
            //6.将下拉框清楚索引为0之后的，只保留第一个
            cityobj.length=1;
            //通过循环遍历市县元素给下拉框赋值
            for(var i=1;i<cityArr[value].length;i++)
            {
                cityobj.options[cityobj.options.length]=new Option(cityName[i],i);
                
            }
            
        }