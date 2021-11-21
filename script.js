fetch('/data.json')
.then(function(response){
    return response.json();
})
.then(function(data){
        var table = document.createElement("table");
        var col = [];
        
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        

        // th row

        var tr = table.insertRow(-1);                  

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // Adding JSON DATA in ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tableCell = tr.insertCell(-1);
                tableCell.innerHTML = data[i][col[j]];
            }
        }

        //ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("data");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

})
.catch(function(err){
    console.log('Error fetching json data');
})