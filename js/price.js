function showDetail(title, price, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDescription').innerText = description;
  }
  
  function toggleDetail(id) {
    var content = document.getElementById(id);
    
    
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
  

