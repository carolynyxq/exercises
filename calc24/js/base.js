
//检测输入是否合法
/*
 $(".number").bind("blur",function(){
 if(isNaN(this.value)){
 alert("请输入一个正整数");
 this.select();
 }else if(this.value==""){
 alert("不可为空");
 this.select();
 }
 });
 //清除结果
 function clearValue(){
 $(".number").innerHTML="";
 $("#number1").focus();
 }*/
//计算
function myMain(){
  var n1=$("#number1").val();
  var n2=$("#number2").val();
  var n3=$("#number3").val();
  var n4=$("#number4").val();//参与计算的数值
  var t=$("#targetCalc").val();//计算目标值
  var r;//计算公式
  var temp=calcProgress(n1,n2,n3,n4,t);
  if(temp){
    $("#result").innerHTML+=temp+'=='+$("#targetCalc").val();
  }else{
    $("#result").innerHTML+='无解';
  }
}
function calcProgress(n1,n2,n3,n4,t){
  var arr=[n1,n2,n3,n4];
  //console.log(arr);
  //第几个数
  var arr1=['1234','1243','1324','1342','1432','1423','2134','2143','2314','2341','2413','2431','3124','3142','3214','3241','3412','3421','4123','4132','4213','4231','4312','4321'];
  var arr2=['+','-','*','/'];
  for(var i=0;i<24;i++){
   var arr3=arr1[i].split('');
    for(var j=0;j<4;j++){
      arr3[j]=parseInt(arr3[j]);//检索arr时做索引用
    }
    for(var ii=0;ii<4;ii++){
      for(var jj=0;jj<4;jj++){
        for(var kk=0;kk<4;kk++){
          exp='arr[arr3[0]-1]+arr2[ii]+arr[arr3[1]-1]+arr2[jj]+arr[arr3[2]-1]+arr2[kk]+arr[arr3[3]-1]';
          if(eval(exp)==t){return exp}
          exp="'('+arr[arr3[0]-1]+arr2[ii]+arr[arr3[1]-1]+')'+arr2[jj]+arr[arr3[2]-1]+arr2[kk]+arr[arr3[3]-1]";
          if(eval(exp)==t){
            return exp;
          }
          exp="arr[arr3[0]-1]+arr2[ii]+'('+arr[arr3[1]-1]+arr2[jj]+arr[arr3[2]-1]+')'+arr2[kk]+arr[arr3[3]-1]";
          if(eval(exp)==t){
            return exp;
          }
          exp="arr[arr3[0]-1]+arr2[ii]+arr[arr3[1]-1]+arr2[jj]+'('+arr[arr3[2]-1]+arr2[kk]+arr[arr3[3]-1]+')'";
          if(eval(exp)==t){
            return exp;
          }
          exp="'('+arr[arr3[0]-1]+arr2[ii]+arr[arr3[1]-1]+arr2[jj]+arr[arr3[2]-1]+')'+arr2[kk]+arr[arr3[3]-1]";
          if(eval(exp)==t){
            return exp;
          }
          exp="arr[arr3[0]-1]+arr2[ii]+'('+arr[arr3[1]-1]+arr2[jj]+arr[arr3[2]-1]+arr2[kk]+arr[arr3[3]-1]+')'";
          if(eval(exp)==t){
            return exp;
          }
          exp="'('+arr[arr3[0]-1]+arr2[ii]+arr[arr3[1]-1]+')'+arr2[jj]+'('+arr[arr3[2]-1]+arr2[kk]+arr[arr3[3]-1]+')'";
          if(eval(exp)==t){
            return exp;
          }
        }
      }
    }
  }
}
