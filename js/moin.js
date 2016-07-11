$(function(){
	$('.tab-head-item').on('click',function(e){
		var index = $(this).index();
		
		$('.tab-content-item').hide();
		$('.tab-content-item').eq(index).show();
		$('.tab-head-bottom').css({
			'left':$(this).offset().left,
			'width':$(this).width()
		});
	})
	
	
	$.fn.moinProgress  = function(){
		var $this = $(this);
		var rate = $this.find('.moin-progress-rate');
		var rate_value = $this.data('rate');
		rate.width(rate_value);
	}
	
	$('.moin-progress-bar').moinProgress(function(){
		
	});
	
	
	//绑定事件
	$('.moin-history-back').on('click',function(e){
		window.history.back();
	})
	
	$('.moin-index-checkin-btn').on('click',function(){
		window.location.href="checkin.html";
	})
	$('.ui-icon-home').on('click',function(e){
		window.location.href="index.html";
	})
	$('.moin-check-btn').on('click',function(e){
		$(this).attr('disabled','disabled');
		window.location.href="checkin.html";
	})
	
	
	$('.moin-index-login-btn').on('click',function(e){
		window.location.href="login.html";
	})
	//我的魔豆
	$('.moin-mygold-btn').on('click',function(){
		window.location.href="mygold.html";
	})
	   
	//
	$('#login_btn').on('click',function(e){
		window.location.href="index.html";
	})
})