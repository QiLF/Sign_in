		 /*
		 标题:将layui时间线改为下拉菜单，用于隐藏和显示内容
		 参数：内容的id
		 返回：无
		 */
        function change_display(id){
             var traget=document.getElementById(id);
              if(traget.style.display=="none"){
                      traget.style.display="block";
              }else{
                      traget.style.display="none";
            }
         }
		 /*
		 标题:根据后端传来的参数改变子项的完成/未完成状态（笑脸哭脸相互转换）
		 参数：1.笑脸哭脸的id   2.是否完成（完成用true表示，对应笑脸；未完成用false表示，对应哭脸）
		 返回：无
		 */
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
	   /*           <!--这个函数未完成，需要用到element模块，还不会使用-->
       标题:  进度条的改变
       参数：1.进度条的id   2.进度，用0~1的小数表示
       返回：无
       */
        function change_one_bar(id,percent)
        {
      	var traget=document.getElementById(id);
      	traget.innerHTML="<div   class='layui-progress-bar layui-bg-red' lay-percent='20%'></div>";
         }
          <!--某个任务下所有子项的初始化，要求的后端参数有  1.数组sub_task（子项完成为1，未完成为0）-->
		  
		  
		 /*
         标题:某个任务下所有子项的进度条和哭笑脸的初始化
         参数：任务编码 1~  的正整数
         返回：无
         */  
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
		
		 /*
         标题:任务进度界面的初始化（进度条和哭笑脸）
         参数：任务数量                   这里由于没有后端所以暂且用3代替
         返回：无
         */ 		
         function total_task_progress()
         {
      		for(var i=1;i<=3;i++)
      		{
      		   task_progress(i);
      		}
         }
		 /*
         标题:某个任务历史的初始化（进度条和哭笑脸）
         参数：任务历史的编号
         返回：无
         */ 
      	function task_h_progress(task_h_label)
        {
      	//alert(task_h_label);
      	var sub_task_h=new Array(false,true,true,false,false);<!--表示子项是否完成的数组，应从后端获取-->
      	var sub_finish_num=0;
          if(Array.isArray(sub_task_h))
      	{
             for(var i=0;i<sub_task_h.length;i++)
      	   {
      	      change_one_face('face_h'+task_h_label+'-'+(i+1),sub_task_h[i]);
      		  if(sub_task_h[i]==true)sub_finish_num++;
      	   }
      	   var percent=sub_finish_num/sub_task_h.length;
      	  // change_one_bar('task_bar'+'task_label',percent);   这个函数不能用！光占个位

          }
        }
         <!--历史界面的初始化，要求的后端参数为  1.历史任务的数目-->
		 /*
         标题:所有任务历史的初始化（进度条和哭笑脸）
         参数：任务历史的数量                 由于没有后端所以暂且用3代替
         返回：无
         */ 
         function total_task_h_progress()
         {
      		for(var i=1;i<=3;i++)
      		{
      		   task_h_progress(i);
      		}
         }

