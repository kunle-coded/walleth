export default function updateUrlLocation(param: string) {
  if (param === "general" && window.location.hash.includes("/")) {
    window.location.hash = window.location.hash.split("/")[0];
  } else if (window.location.hash.includes("/")) {
    window.location.hash = window.location.hash.split("/")[0] + `/${param}`;
  } else {
    window.location.hash += `/${param}`;
  }
}
