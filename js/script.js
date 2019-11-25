function topnavChange()
{
	var node = document.getElementsByClassName('nd-animation')[0];
	if (node.classList.contains('is-open')) {
		node.classList.remove('is-open');
	} else {
		node.classList.add('is-open');
	}
	var node1 = document.getElementsByClassName('topnav')[0];
	if (node1.classList.contains('shownav')) {
		node1.classList.remove('shownav');
	} else {
		node1.classList.add('shownav');
	}	
}