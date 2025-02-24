// Tunggu hingga halaman sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua menu navigasi
  const menuItems = document.querySelectorAll("nav ul li a");

  // Menentukan halaman yang sedang aktif berdasarkan URL
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "index.html") {
    currentPage = "index.html";
  }

  // Loop melalui semua menu untuk menandai halaman aktif
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    }

    // Tambahkan event listener untuk efek klik dan aktif
    item.addEventListener("click", function (event) {
      // Hapus kelas 'active' dari semua menu
      menuItems.forEach((link) => link.classList.remove("active"));

      // Tambahkan kelas 'active' pada menu yang diklik
      event.target.classList.add("active");
    });

    // Efek klik dengan animasi tekan
    item.addEventListener("mousedown", function () {
      item.style.transform = "scale(0.95)";
    });

    item.addEventListener("mouseup", function () {
      item.style.transform = "scale(1)";
    });
  });
});
