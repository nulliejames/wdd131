const reviewParams = new URLSearchParams(window.location.search);
const details = document.querySelector("#review-details");
const reviewCount = document.querySelector("#review-count");
const submittedProduct = reviewParams.get("product");

if (submittedProduct) {
    let count;
    try {
        count = (Number(localStorage.getItem("productReviewCount")) || 0) + 1;
        localStorage.setItem("productReviewCount", count);
    } catch {
        count = 1;
    }
    reviewCount.textContent = `You have submitted ${count} review${count === 1 ? "" : "s"}.`;

    const fields = [
        ["Product", reviewParams.get("product-name") || submittedProduct],
        ["Rating", `${reviewParams.get("rating") || "Not provided"} out of 5`],
        ["Date of Installation", reviewParams.get("installation-date") || "Not provided"],
        ["Useful Features", reviewParams.getAll("features").join(", ") || "None selected"],
        ["Written Review", reviewParams.get("written-review") || "None provided"],
        ["Name", reviewParams.get("user-name") || "Not provided"]
    ];

    fields.forEach(([label, value]) => {
        const term = document.createElement("dt");
        const description = document.createElement("dd");
        term.textContent = label;
        description.textContent = value;
        details.append(term, description);
    });
} else {
    reviewCount.textContent = "No review was submitted yet.";
}

const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;