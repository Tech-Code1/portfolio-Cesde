var myModal = new bootstrap.Modal(document.getElementById('modal-datos'));

			let sectionDatos = document.getElementById("datos");
			sectionDatos.addEventListener("click", (e) => {
				console.log(e.target.id);

				let buttons = ["btn-Linkedin", "btn-facebook", "btn-github", "btn-cv"];
				if (!buttons.includes(e.target.id))
					myModal.show();
			})
