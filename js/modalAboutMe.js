var myModal = new bootstrap.Modal(document.getElementById('modal-datos'));

			let sectionDatos = document.getElementById("datos");
			sectionDatos.addEventListener("click", (e) => {
				console.log(e.target.id);

				let buttons = ["btn-Linkedin", "btn-facebook", "btn-github", "btn-cv","linkedin","facebook", "github", "descargar"];
				if (!buttons.includes(e.target.id))
					myModal.show();
			})
