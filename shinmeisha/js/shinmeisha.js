/*<!--toggle-menu-->*/
	$(function(){
		"use strict";
	 	$("#nav-toggle").click(function(){
				closeMenu();
		});
		$("#menu-close").click(function(){
				closeMenu();
		});
	});
	function closeMenu(){
		"use strict";
		$("#menu").slideToggle();
		$("#nav-toggle").toggleClass("active");		
	}
/*<!--faq-menu-->*/
	$(function(){
		"use strict";
		$(".faq-q").click(function(){
			$(this).next(".faq-a").slideToggle();	
			$(this).children(".tgl-dw").toggleClass("hide");
			$(this).children(".tgl-up").toggleClass("show");
		});
	});
/*<!--scroll-btn-->*/
	$(function() {
		"use strict";
			var window_h =$(window).height();
			var document_h =$(document).height();
			var topBtn = $('.gotop');
			var scrl_fadein=100;
			var footer_h=$("footer").height();
			console.log('footer_h=', footer_h);
			topBtn.hide();												//初期状態でボタンを非表示
			$(window).scroll(function () {
					var scrl=$(window).scrollTop();
					var scrl_pos=scrl + window_h;			//スクロール量を取得
					if (scrl > scrl_fadein){					//スクロール量が規定値より多ければボタンを表示
						topBtn.fadeIn();
						if (document_h - scrl_pos <= footer_h) {	//残スクロール量がフッタの高さを下回ると
							topBtn.css('bottom', footer_h+'px');	 //ボタンをフッタ上部に固定する
						}	else{
							topBtn.css('bottom', '0');
						}
					}	else {
							topBtn.fadeOut();
					}
			});
    });