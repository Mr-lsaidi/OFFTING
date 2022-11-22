async function fetchData() {
    try{
        const row = document.getElementsByClassName("full-width shop-list")[0]
        const cols = row.getElementsByClassName("col-lg-3 col-sm-6 col-xs-12");
        for (let i = 0; i < cols.length; i++) {
          
            const card = cols[i].getElementsByClassName("shop-item")[0]
            const name = card.getElementsByClassName("name")[0].innerHTML
            if (name === 'tig me please'){
                cols[i].innerHTML = `
                <div 
                style='
                    display: flex;
                    align-items: center;
                    padding: 120px 0 0 0;
                    justify-content: center;
                '
                >
                    <h1>zabii la chritih .I.</h1>
                </div>
                `;
                cols[i].style
            }
        }
    }catch (e){
        console.log(e);
    }
}
fetchData();