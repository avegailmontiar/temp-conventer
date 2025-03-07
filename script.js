function convert() {
    const value = document.getElementById("tempValue").value;
    const unit = document.getElementById("unit").value;

    if (value === "") {
        alert("Please enter a temperature value");
        return;
    }

    fetch(/convert?value=${value}&unit=${unit})
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("result").innerText = "Invalid input!";
            } else {
                document.getElementById("result").innerText = ${data.input} = ${data.output};
            }
        });
}