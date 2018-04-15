// 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
function addRow() {
	var newRow=document.createElement("tr");
	var ibody=document.getElementById("table").lastChild;
	var td1=document.createElement("td");
	td1.innerHTML="<input type=\"text\" width:'20px' />";
	newRow.appendChild(td1);
	var td2=document.createElement("td");
	td2.innerHTML="<input type='text' />";
	newRow.appendChild(td2);
	var td3=document.createElement("td");
	td3.innerHTML="<a href='javascript:;' onclick='clearRow(this)'>删除</a>";
	newRow.appendChild(td3); ibody.appendChild(newRow); view();
}
// 创建删除函数
function clearRow(obj) {
	var ibody=document.getEementsByTagname("table").lastChild;
	var c=obj.parentNode.parentNode;
	c.parentNode.removeChild(c);
}
