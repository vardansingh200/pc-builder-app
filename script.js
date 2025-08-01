function search() {
    const device = document.getElementById("device").value;
    const usage = document.getElementById("usage").value;
    const brand = document.getElementById("brand").value.trim();
    const budget = parseInt(document.getElementById("budget").value) || 0;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    let products = [];

    if (device === "PC") {
        products = [
            "Intel i5, 16GB RAM, 512GB SSD - ₹" + budget,
            "AMD Ryzen 5, 32GB RAM, 1TB HDD - ₹" + (budget + 2000)
        ];
    } else if (device === "Laptop") {
        products = [
            `${brand ? brand : "HP"} Pavilion - ₹${budget}`,
            `${brand ? brand : "Dell"} Inspiron - ₹${budget + 3000}`
        ];
    } else if (device === "Phone") {
        products = [
            `${brand ? brand : "Samsung"} Galaxy - ₹${budget}`,
            `${brand ? brand : "Redmi"} Note - ₹${budget + 1000}`,
            `${brand ? brand : "Realme"} GT - ₹${budget + 1500}`
        ];
    }

    if (products.length === 0) {
        resultsDiv.innerHTML = "<p>No matching products found.</p>";
    } else {
        products.forEach(product => {
            const link = document.createElement("a");
            link.href = `https://www.amazon.in/s?k=${encodeURIComponent(product)}&tag=210b02a-21`;
            link.target = "_blank";
            link.textContent = product;
            link.style.display = "block";
            link.style.marginBottom = "10px";
            resultsDiv.appendChild(link);
        });
    }
}
