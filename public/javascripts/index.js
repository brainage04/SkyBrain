let itemTooltips = document.querySelectorAll("#bazaarContents .bazaarItem .itemTooltip");
let clickSound = document.getElementById("clickSound");
clickSound.volume = 0.2;

for (let i = 0; i < itemTooltips.length; i++) {
	let itemTooltip = itemTooltips[i];
	let bazaarItem = itemTooltip.parentNode;

	bazaarItem.onmousemove = (e) => {
		itemTooltip.style.left = e.pageX - 64 + 'px';
		itemTooltip.style.top = e.pageY - 64 + 'px';
	}

	bazaarItem.onclick = function() {
		if (clickSound.paused) {
			clickSound.play();
		} else {
			clickSound.currentTime = 0.05;
		}
	}
}