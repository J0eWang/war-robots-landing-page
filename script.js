document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // --- GANTI BAGIAN NOMOR 2 DENGAN KODE INI ---
  // 2. Interactive Robot Showcase Data (Dengan Gambar)
  const robotData = {
    destrier: {
      name: "DESTRIER",
      role: "Role: Light Scout Mech",
      desc: "Fast and agile, perfect for capturing beacons and tactical guerrilla warfare.",
      img: "https://api.warrobots.com/storage/robot/6/regular_detail_picture-92ba3ae63140c6b1b5b55aa5ea02d265.jpg"
    },
    cossack: {
      name: "COSSACK",
      role: "Role: Jumper Specialist",
      desc: "Equipped with jump jets to bypass obstacles and take high-ground advantage.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3TaBt7v_8HpKa6YT32XwFhm7IlGd28EK1NaVc6vgshg6Z5YW9FIBykk&s=10"
    },
    griffin: {
      name: "GRIFFIN",
      role: "Role: Heavy Assaulter",
      desc: "Packs massive firepower with 4 weapon slots and heavy protective armor.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8Ztwr_iABjOf0Lgbnp_WjuFw6ofU2jvpqorMP-mv8eCaz3surxZB71g&s=10"
    }
  };

  const tabButtons = document.querySelectorAll(".tab-btn");
  const robotName = document.getElementById("robotName");
  const robotRole = document.getElementById("robotRole");
  const robotDesc = document.getElementById("robotDesc");
  const robotImg = document.getElementById("robotImg"); // Mengambil elemen img dari HTML

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));
      
      // Add active class to clicked button
      button.classList.add("active");

      // Update DOM content & image based on selected robot
      const selected = button.getAttribute("data-robot");
      if (robotData[selected]) {
        robotName.textContent = robotData[selected].name;
        robotRole.textContent = robotData[selected].role;
        robotDesc.textContent = robotData[selected].desc;
        robotImg.src = robotData[selected].img; // Mengganti URL gambar
        robotImg.alt = robotData[selected].name;
      }
    });
  });
  // -------------------------------------------
});

// 3. Download Trigger Function
function triggerDownload(platform) {
  const downloadStatus = document.getElementById("downloadStatus");
  downloadStatus.textContent = `Redirecting to ${platform} store... Prepare for launch!`;
}