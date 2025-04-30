// click Event
document.getElementById("colorBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
//   Hover Event
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
  });
  
//   Keypress Detection
  document.getElementById("keypressInput").addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  //  Color Changes on Click
  document.getElementById("colorBtn").addEventListener("dblclick", () => {
    alert("Double-clicked for a secret!");
  });
  
  document.getElementById("colorToggleBtn").addEventListener("click", function () {
    this.classList.toggle("colorful");
  });
  
  // Image gallery
  const images = [
    "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  let currentIndex = 0;
  
  document.getElementById("nextImageBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
  });
  
  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
      document.getElementById(btn.dataset.tab).classList.remove("hidden");
    });
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    let feedback = "";
  
    if (username === "") {
      feedback += "Username is required.<br/>";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      feedback += "Invalid email format.<br/>";
    }
    if (password.length < 8) {
      feedback += "Password must be at least 8 characters.<br/>";
    }
  
    document.getElementById("formFeedback").innerHTML = feedback || "Form submitted successfully!";
  });
  
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("formFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short";
    } else {
      feedback.textContent = "";
    }
  });
  