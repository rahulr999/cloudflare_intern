addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
  var link_var = await (await fetch("https://cfw-takehome.developers.workers.dev/api/variants")).json();
  var location = link_var.variants[Math.floor(Math.random()*(1+1))];
  if (location) {
    return Response.redirect(location, 301)
  }

}