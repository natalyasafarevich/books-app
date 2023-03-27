export function toggleClass(item, name_class) {
  item.classList.toggle(name_class);
}
export function removeClass(item, name_class) {
  item.classList.remove(name_class);
}
export function addClass(item, name_class) {
  item.classList.add(name_class);
}
export function notificationEvent() {
  document.querySelector(".notification").classList.remove("animation-hidden");
  document.querySelector(".notification").classList.add("animation-open");

  const timer = setTimeout(() => {
    document.querySelector(".notification").classList.remove("animation-open");
    document.querySelector(".notification").classList.add("animation-hidden");
  }, 2000);
  return() => clearTimeout(timer);
}


export function bookParams(page, value, language) {
  return `page=${page}&search=${value}&languages=${
    language.language.join(",")
  }`;
}

export function topicParams(page, value, language) {
  return `page=${page}&topic=${value}&languages=${
    language.language.join(",")
  }`;
}
export function idParams(page, value, language) {
  return `page=${page}&ids=${value}&languages=${
    language.language.join(",")
  }`;
}


export function validation(){
  
}