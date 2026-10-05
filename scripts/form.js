const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" }
];

const productSelect = document.querySelector("#product");
const productNameInput = document.querySelector("#product-name");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.append(option);
});

productSelect.form.addEventListener("submit", () => {
    productNameInput.value = productSelect.selectedOptions[0].textContent;
});

const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;