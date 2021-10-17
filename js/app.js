let header_of_sections = 0;
const sectionCreation = () => {
  header_of_sections++;
  const content = `<section id="section${header_of_sections}" data-navigation="Section ${header_of_sections}">
    <div class="landing__container">
    <h2>Section ${header_of_sections}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};

const navigation_Bar = document.getElementById("navigation_list_items");
const createNavItems = () => {
  navigation_Bar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-navigation="${section.id}" class="menu__link">${section.dataset.navigation}</a></li>`;
    navigation_Bar.insertAdjacentHTML("beforeend", listItem);
  });
};

window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navigation_Bar.querySelector(`[data-navigation=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
    active.classList.remove("your-active-class");
    activeLink.classList.remove("active-link");
    }
	});
}

navigation_Bar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.navigation) {
    document
      .getElementById(`${event.target.dataset.navigation}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.navigation}`;
    }, 200);
  }
});

for (let i = 1; i < 5; i++) sectionCreation();
createNavItems();

document.getElementById("section_button").addEventListener("click", () => {
  sectionCreation();
  createNavItems();
});

let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

  window.scrollY > 800
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
};





