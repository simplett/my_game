var box=document.getElementsByClassName("box")[0];
var send=box.getElementsByTagName("button");
console.log(send);
for(var btn of send)
{
    btn.onclick=function()
    {
		//获取当前按钮的上一个哥哥元素input的内容
        var mass=this.previousElementSibling.value;
		var starc=mass.indexOf("http");
		console.log(starc);
		this.previousElementSibling.value="";
		//创建一个div标签，把input的value加进去
		var massge=document.createElement("div");
		massge.className="msg-right";
		//判断是否是图片
		if(starc===0)
			{
				var massge_img1=document.createElement("img");
				massge_img1.setAttribute("src",mass);
				massge.appendChild(massge_img1);
			}else{
        		massge.innerHTML=mass;
			}
		//把生成的标签增加给消息框（class=msg）
        this.parentNode.previousElementSibling.appendChild(massge);
		//创建一个div标签，把class=msg-left；把input的value加进去
		var texts=document.createElement("div");
		texts.className="msg-left";
		if(starc==0)
			{
				var massge_img2=document.createElement("img");
				massge_img2.setAttribute("src",mass);
				texts.appendChild(massge_img2);
			}else{
				console.log("不是图片");
        		texts.innerHTML=mass;
				console.log(massge.innerHTML,44646);
			}
		console.log(mass);
		//获取当前按钮的自定义属性data-IDcard值作为下一步的ID
        var id=this.getAttribute("data-idcard");
		//找到ID对应的标签
        var text=document.getElementById(id);
		//把克隆的p标签加给text
		text.appendChild(texts);
    }
}