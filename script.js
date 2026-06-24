function startChat(){
alert("AI Assistant Started");
}

function generatePreview(){
document.getElementById("previewStatus").innerHTML =
"Website Preview Generated Successfully";
}

function openPayment(){
document.getElementById("paymentModal").style.display =
"block";
}

function closePayment(){
document.getElementById("paymentModal").style.display =
"none";
}

function confirmPayment(){
alert(
"Payment submitted. Brian Soita will review your order."
);

closePayment();
}
