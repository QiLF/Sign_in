	
<!--自己写的js，用于隐藏和显示内容-->
  function change_display(id){
       var traget=document.getElementById(id);
        if(traget.style.display=="none"){
                traget.style.display="block";
        }else{
                traget.style.display="none";
      }
   }
<!--根据后端传来的参数改变子项的笑脸哭脸-->             
  function change_one_face(id,finished){
  //alert(id);
       var traget=document.getElementById(id);
	   if(finished==true)
	   {
	   traget.innerHTML="&#xe60c;";
	   traget.style="font-size: 20px; color: #1E9FFF;float:right;";
	   }
	   else
	   {
	   traget.innerHTML="&#xe69c;";
	   traget.style="font-size: 19px; color:#FF5722;float:right;";
	   }
  }
<!--这个函数未完成，需要用到element模块，还不会使用-->
  function change_one_bar(id,percent)
  {
	var traget=document.getElementById(id);
	traget.innerHTML="<div   class='layui-progress-bar layui-bg-red' lay-percent='20%'></div>";
   }
    <!--某个任务下所有子项的初始化，要求的后端参数有  1.数组sub_task（子项完成为1，未完成为0）-->
  function task_progress(task_label)
  {
	//alert(task_label);
	var sub_task=new Array(false,true,true,false,false);<!--表示子项是否完成的数组，应从后端获取-->
	var sub_finish_num=0;
    if(Array.isArray(sub_task))
	{
       for(var i=0;i<sub_task.length;i++)
	   {
	      change_one_face('face'+task_label+'-'+(i+1),sub_task[i]);
		  if(sub_task[i]==true)sub_finish_num++;
	   }
	   var percent=sub_finish_num/sub_task.length;
	  // change_one_bar('task_bar'+'task_label',percent);   这个函数不能用！占个位
		
    }
  }
   <!--任务进度界面的初始化，要求的后端参数为  1.任务的数目-->
   function total_task_progress()
   {
		for(var i=1;i<=5;i++)
		{
		   task_progress(i);
		}
   }
