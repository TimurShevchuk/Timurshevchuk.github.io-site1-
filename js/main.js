document.getElementById('date_form').valueAsDate = new Date(); //сегодняшняя дата в форме

//модальное окно

var modal = document.getElementById('myModal');
    var btn = document.getElementById('myBtn');
    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function () {
        modal.style.display = "flex";
        document.querySelector('html').classList.add('no-scroll');
        // console.log(document.getElementByTagName('html'));
    }
    span.onclick = function () {
        modal.style.display = "none";
        document.querySelector('html').classList.remove('no-scroll');

    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.querySelector('html').classList.remove('no-scroll');
        }
    }



//плавность якорной ссылки

	const anchors = document.querySelectorAll('a[href*="#"]')

	for(let anchor of anchors){
		anchor.addEventListener("click", function(event){
			event.preventDefault();
			const blockID = anchor.getAttribute('href')	
			document.querySelector('' + blockID).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})

		})
	}

    