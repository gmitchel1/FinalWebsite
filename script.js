async function loadIncludes() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) {
    const headerFile = await fetch("header.html");
    header.innerHTML = await headerFile.text();
  }

  if (footer) {
    const footerFile = await fetch("footer.html");
    footer.innerHTML = await footerFile.text();
  }
}

loadIncludes();
