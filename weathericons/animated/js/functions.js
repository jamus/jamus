


$( ".wi" ).each(function( index ) { // find all our weather icons - class "wi"
	for ( var i = 0; i < templateList.length; i++ )
	{
		if ( $(this).hasClass( templateList[i] ) )
		{
			thisType = templateList[i];

			$(this).append(getHTML(thisType));
			$thisFKeyColour = templateList[i];
			break;
		}
	}
});

function getHTML(type){
	var thistype = type;
	console.log("Getting HTML for "+thistype);
	HTML = templates[thistype];
	return HTML;
}

