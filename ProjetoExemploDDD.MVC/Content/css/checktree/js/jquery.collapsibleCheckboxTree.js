(function($) {
 
	$.fn.collapsibleCheckboxTree = function(options) {
		
		var defaults = {
			checkParents : true, // When checking a box, all parents are checked
			checkChildren : false, // When checking a box, all children are checked
			shiftClickEffectChildren : true, // When shift-clicking a box, all children are checked or unchecked.
			uncheckChildren : true, // When unchecking a box, all children are unchecked
			initialState : 'default' // Options - 'expand' (fully expanded), 'collapse' (fully collapsed) or default
		};
			
		var options = $.extend(defaults, options); 
 
		this.each(function() {
						   
			var $root = this;
						   

			// Hide all except top level
			$("ul", $(this)).addClass('hide');
			// Check parents if necessary
			if (defaults.checkParents) {
				$("input:checked").parents("li").find("input[type='checkbox']:first").attr('checked', true);
			}
			// Check children if necessary
			if (defaults.checkChildren) {
				$("input:checked").parent("li").find("input[type='checkbox']").attr('checked', true);
			}
			// Show checked and immediate children of checked
			$("li:has(input:checked) > ul", $(this)).removeClass('hide');
			// Add tree links
			$("li:has(> ul:not(.hide)) > span", $(this)).addClass('expanded').html('');
			$("li:has(> ul.hide) > span", $(this)).addClass('collapsed').html('');
			
			// Checkbox function
			$("input[type='checkbox']", $(this)).click(function(ev){
				
				// If checking ...
				if ($(this).is(":checked")) {
					
					// Show immediate children  of checked
					$("> ul", $(this).parent("li")).removeClass('hide');
					// Update the tree
					$("> span.collapsed", $(this).parent("li")).removeClass("collapsed").addClass("expanded").html('');
					
					// Check parents if necessary
					if (defaults.checkParents) {
						$(this).parents("li").find("input[type='checkbox']:first").attr('checked', true);
					}
					
					// Check children if necessary
					if (defaults.checkChildren || (defaults.shiftClickEffectChildren && ev.shiftKey)) {
						$(this).parent("li").find("input[type='checkbox']").attr('checked', true);
						// Show all children of checked
						$("ul", $(this).parent("li")).removeClass('hide');
						// Update the tree
						$("span.collapsed", $(this).parent("li")).removeClass("collapsed").addClass("expanded").html('');
					}
					
					
				// If unchecking...
				} else {
					
					// Uncheck children if necessary
					if (defaults.uncheckChildren || (defaults.shiftClickEffectChildren && ev.shiftKey)) {
						$(this).parent("li").find("input[type='checkbox']").attr('checked', false);
						// Hide all children
						$("ul", $(this).parent("li")).addClass('hide');
						// Update the tree
						$("span.expanded", $(this).parent("li")).removeClass("expanded").addClass("collapsed").html('');
					}
				}
				
			});
			
			// Tree function
			$("li:has(> ul) span", $(this)).click(function(){
					
				// If was previously collapsed...
				if ($(this).is(".collapsed")) {
					
					// ... then expand
					$("> ul", $(this).parent("li")).removeClass('hide');
					// ... and update the html
					$(this).removeClass("collapsed").addClass("expanded").html('-');
				
				// If was previously expanded...
				} else if ($(this).is(".expanded")) {
					
					// ... then collapse
					$("> ul", $(this).parent("li")).addClass('hide');
					// and update the html
					$(this).removeClass("expanded").addClass("collapsed").html('+');
				}
				
			});
			
		});
		
		return this;
		
	};
	
})(jQuery);
