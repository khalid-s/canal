jQuery(document).ready(function($){
	// Hack pour les placeholder IE 8 & 9 : focus et blur d'un input
	$('[placeholder]').live('focus', function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	    if(input.hasClass('password')){
	    	var parent = input.parent();
	    	parent.html('<input type="password" class="" placeholder="' + input.attr('placeholder') + '" />');
	    	parent.children('input').focus();
	    }
	  }
	}).live('blur',function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {	  	
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));		       
	    if(input.attr('type') == "password"){
	    	input.parent().html('<input type="text" value="' + input.attr('placeholder') + '" class="placeholder password" placeholder="' + input.attr('placeholder') + '" />');
	    } 
	  }
	});
	
	$('[placeholder]').blur();
		
	// Hack pour les placeholder IE 8 & 9 : Submit d'un formulaire'
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
	    var input = $(this);
	    if (input.val() == input.attr('placeholder')) {
	      input.val('');
	    }
	  })
	});
});