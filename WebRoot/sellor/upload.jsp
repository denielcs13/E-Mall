<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<link href="${pageContext.request.contextPath }/css/prddetail.min.css"
	rel="stylesheet" type="text/css" />
<style type="text/css">
*{ margin:0; padding:0;}
/* body{font-size:12px; background-color:#838fa8;} */
 body{font-size:12px; background-color:#fff;}
.drag{background:#fff; z-index:222221; float:left;position:absolute; top:15%;left:45%; width:410px;height:auto;border:1px solid #4c7ebd; line-height:30px; font-size:12px; cursor:move;}
.dragTop{ height:30px;line-height:30px;color:#333; font-size:12px;background:#78b0e1;padding-left:5px; cursor:move;}
.classspan{float:right;padding-right:5px;cursor:pointer;}
.classspana{display:block; height:30px; width: 30px; background:url('${pageContext.request.contextPath }/images/close.jpg') no-repeat;}
.classspana :hover{background:url('${pageContext.request.contextPath }/images/close_hover.jpg') no-repeat;}
</style>   

<link href="${pageContext.request.contextPath }/css/uploadify.css"
	rel="stylesheet" type="text/css" />

<script language="javascript"
	src="${pageContext.request.contextPath }/js/swfobject.js"></script>
<script language="javascript"
	src="${pageContext.request.contextPath }/js/jquery.uploadify.v2.1.0.min.js"></script>

<script type="text/javascript"> 
     function showResult(){//删除显示的上传成功结果   
          $("#result").html("");   
        }   
    
    $(document).ready(function() {
    	
    	$("#a_upload").hide();
        $('#fileInput').uploadify({   
 		'uploader': 'js/swf/uploadify.swf',
        'script': 'Upload_uploadFile.do',   //指定服务端处理类的入口
        'folder': 'images',   
 		'cancelImg': 'images/cancel.png',
        'fileDataName': 'fileInput', //和input的name属性值保持一致就好，Struts2就能处理了   
        'queueID': 'fileQueue',   
        'auto': false,//是否选取文件后自动上传   
        'multi': true,//是否支持多文件上传
        'sizeLimit':'4000000',
        'simUploadLimit' : 1,//每次最大上传文件数   
        'queueSizeLimit' : 1, //队列中同时存在的文件个数限制  
        'fileExts': '*.jpg;*.gif;*.jpeg;*.png;*.bmp;',//允许的格式
        'fileDesc': '支持格式:jpg/gif/jpeg/png/bmp', //如果配置了以下的'fileExt'属性，那么这个属性是必须的
        //'rollover':true,  
        'buttonText': '',//按钮上的文字  
        'buttonImg': '${pageContext.request.contextPath }/images/browse.jpg', 
        'wmode'          : 'transparent' , 
        'displayData': 'percentage',//有speed和percentage两种，一个显示速度，一个显示完成百分比   
        'onSelect': function(e, queueId, fileObj)
        {
       		 
            if("*.jpg;*.gif;*.jpeg;*.png;*.bmp;".indexOf(fileObj.type)==-1){
           		$("#result").html("<font color=red>图片格式错误！</font>");
           		return false;
           	}
           	 if(fileObj.size > 4000000){
           		$("#result").html("<font color=red>超出最大上传图片的大小（400M）！</font>");
           		return false;
           	}
           	var str = "添加了1张图片 " + fileObj.name;
           	$("#result").html(str);
           	$("#a_upload").show();
           	$("#PD_IMAGES").attr("value","/images/"+fileObj.name);

        } ,
        'onQueueFull':function(event,queueSizeLimit){
    
        	$("#result").html("<font color=red>一次最多只能上传一张图片！</font>");
        },
         
	   　'onUploadSuccess': function ( fileObj, response, data) {  
	    var value = response ;
	   
	   },  
		   'onCancel': function(event, queueID, fileObj){  
		　		$("#result").html("请选择上传的商品图片"); 
				$("#a_upload").hide();
		　   },
		  　   
        'onComplete': function (event, queueID, fileObj, response, data){   
                  $("#result").html(response);//显示上传成功结果   
                  setInterval("showResult()",2000);//两秒后删除显示的上传成功结果   
                  setInterval("close_div()",3000);//两秒后删除显示的上传成功结果   
          }  
           
        });   
           
    });  
function close_div(){
$("#blockdiv").remove();
	$("#updiv").hide();
}
</script>

<div class="drag" style="cursor:default;" id="DragJQCon">
	<div class="dragTop" id="DragJQTop">
	<span class="classspan" onclick="close_div();">
	<a class="classspana"></a></span><strong>新品上架</strong></div>
	<p>
				<div style="position: relative;left: 0px;background: #fff;width: 403px;padding-left: 7px;height: 82%;">
					<div id="result" style="padding-top: 5px;left:0px;right:2px;width:403px;">请选择上传的商品图片</div>
				    <input type="file" name="fileInput" class="redlink" id="fileInput" />
				    <p><font color="green">文件最大上传400M</font></p>
					<!--显示结果-->
					<div id="fileQueue" style="border:none; left:0px;top:5px;width:403px;overflow: auto;"></div>
				</div>
				<div align="right" style="position: relative;left: 0px;width: 403px;height:8%; padding-left: 7px;">
				 <a id="a_upload" hidden="true" href="javascript:$('#fileInput').uploadifyUpload();"  style="text-align: center; width:70;text-decoration: none;background: url('${pageContext.request.contextPath }/images/button.gif') repeat-x 0 -780px;display: inline-block;line-height: 24px;font-size: 14px;font-weight:bold;color:#000;">上传</a>&nbsp;&nbsp;&nbsp;
				<a href="javascript:$('#fileInput').uploadifyClearQueue();"  style="text-align: center; width:70;text-decoration: none;background: url('${pageContext.request.contextPath }/images/button.gif') repeat-x 0 -280px;display: inline-block;line-height: 24px;font-size: 14px;font-weight:bold;color:#000;" >取消</a>
				&nbsp;&nbsp;</div>
	</div>
	
<script type="text/javascript">

// jQuery方法定义的拖动
function dragJQ(dragControl, dragContent){
	var _drag = false, _x, _y, cw, ch, sw, sh;
	var dragContent = typeof dragContent == "undefined" ? dragControl : dragContent;
	
	$(dragControl).mousedown(function(e){
		_drag = true;
		
		_x = e.pageX - parseInt($(dragContent).css("left"));
		_y = e.pageY - parseInt($(dragContent).css("top"));
		cw = $(window).width();
		ch = $(window).height();
		sw = parseInt($(dragContent).outerWidth());
		sh = parseInt($(dragContent).outerHeight());
		
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //禁止拖放对象文本被选择的方法
		document.body.setCapture && $(dragContent)[0].setCapture(); // IE下鼠标超出视口仍可被监听
		
		$(document).mousemove(function(e){
			if (_drag) {
				var x = e.pageX - _x;
				var y = e.pageY - _y;
				x = x < 0 ? x = 0 : x < (cw-sw) ? x :(cw-sw);
				y = y < 0 ? y = 0 : y < (ch-sh) ? y :(ch-sh);
				
				$(dragContent).css({
					top: y,
					left: x
				});
			}
		}).mouseup(function(){
			_drag = false;
			document.body.releaseCapture && $(dragContent)[0].releaseCapture();
		});
	});
}
// jQuery方法实例化
dragJQ("#DragJQ");
dragJQ("#DragJQTop", "#DragJQCon");
</script>
