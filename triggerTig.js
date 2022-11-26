const text = () => {
	const array = "zabii la chritih .I.";
	let res = "";
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element == " ") res += `<span style="--i:${i + 1} ;margin:5px">${element}</span>`;
		else res += `<span style="--i:${i + 1}">${element}</span>`;
	}

	return res;
};

async function fetchData() {
	try {
		const row = document.getElementsByClassName("full-width shop-list")[0];
		const cols = row.getElementsByClassName("col-lg-3 col-sm-6 col-xs-12");
		for (let i = 0; i < cols.length; i++) {
			const card = cols[i].getElementsByClassName("shop-item")[0];
			let name = card.getElementsByClassName("name")[0].innerHTML;
			name = name.toLowerCase();
			if (name.includes("tig")) {
				cols[i].innerHTML = `
                <div 
                style='
                    margin-bottom: 30px;
                    position: relative;
                    padding: 0px;
                    background: #fff;
                    color: #35353b;
                    border: solid 1px #e5e5e5;
                    height: 350px;
                    border-radius: 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                '
                class="waviy"
                >

                  ${text()}
            
                </div>
                `;
				cols[i].style;
			}
		}
	} catch (e) {
		console.log(e);
	}
}
fetchData();
