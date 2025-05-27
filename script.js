const viewer = document.getElementById("image-viewer");
const fullImage = document.getElementById("full-image");
const closeBtn = document.getElementById("close-btn");

document.querySelectorAll(".art-pic img").forEach(img => {
  img.style.cursor = 'pointer'; // show zoom cursor on thumbnails
  img.addEventListener("click", () => {
    fullImage.src = img.src;
    viewer.style.display = "flex";
    document.body.style.overflow = 'hidden'; // prevent background scroll
  });
});

function closeViewer() {
  viewer.style.display = "none";
  fullImage.src = '';
  document.body.style.overflow = 'auto'; // re-enable scroll
}

closeBtn.addEventListener("click", closeViewer);

// also close if clicking outside the image
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    closeViewer();
  }
});



