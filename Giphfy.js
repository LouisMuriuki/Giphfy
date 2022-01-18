
			const Api= "NFuNBS5lJtwyPVgz8uurxjMDRX1GWqO9";
			document.addEventListener("DOMContentLoaded",innit)
			function innit() {
				const search =document.getElementById("search")
				search.addEventListener("click",ev =>{
					ev.preventDefault()
					let url='https://api.giphy.com/v1/gifs/search?api_key='+ Api +'&q='
					let stg=document.getElementById("input").value.trim()
					url=url.concat(stg)
					fetch(url )
					.then(response => response.json())
					.then(content =>{
						console.log(content.data)
						console.log("META",content.meta)
						for (var i = 0; i < content.data.length; i++) {
						let fig=document.createElement("figure")
						let img=document.createElement("img")
						let caption=document.createElement("caption")
						img.src=content.data[i].images.downsized.url
						caption.textContent=content.data[i].title
						fig.appendChild(img)
						fig.appendChild(caption)
						console.log(img)
						console.log(caption)
						let row=document.querySelector(".row")
						row.insertAdjacentElement("afterbegin",fig)	
						input.value=""
						}
						
						


					})
					

				})

				
			}
		