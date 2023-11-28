'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f8baf17dc01649cd7ef0df6a4f5756d7",
".git/config": "38700ad3d1a1345fbb3c344dc1e5112f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "782df6d2b978ba92133b71e24cd96fc2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f87046865b593741215376c444452309",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd59b60867e5ef1889849b6c2ea16b6f",
".git/logs/refs/heads/main": "bd59b60867e5ef1889849b6c2ea16b6f",
".git/logs/refs/remotes/origin/main": "0f02c48bd58292896fa2760141ba9bb7",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/03/e20ade646f35de37a40fecb879f7df5e05c975": "46de084545a749e799dfef8dbe183e7a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/c0a31bbc4442256ca6ee5d6aaa6470021d6dc4": "203f57e2c91780952df5e68432aca158",
".git/objects/0b/14e5fb34c9d4cdd49abed9951b06904caa8f67": "de0880ac6818e87fc5b780da92a23ed0",
".git/objects/0d/116b8204b5c7a31087ab7df89ac7a41d74f998": "7ab0bca4bfa23c28c8d67f4ec1f56828",
".git/objects/14/9efe3ec0d2cd63fed4709d0c413b80696f5c87": "3b3d7446b6350b2cd2c07669d7cde2bd",
".git/objects/23/467f9d3b50812838ef6647d694d96a5c67881f": "f3de519976d3bf060f0e71530a5d5eba",
".git/objects/25/0ac08bb67d0f976faf4303c2551fba61f678be": "d4f506ffd1ab2ddc450f76ca8ea3df53",
".git/objects/26/93c693b1afebe09f3ec4a5f01216bae884e893": "6df8be5b41cda38f8981433e4c2a8d06",
".git/objects/2a/4f674acd81a18c5a4e60914cf5b77ea1cfa5f6": "e43e933485f029e27d01ab2478193569",
".git/objects/2a/f66bcc30cdaa7be2f44ed6df83787e54a3f024": "3f9f25b02a7d86bf40a2b839033c28ed",
".git/objects/2c/a0a2d8cf397044f1968963fd03fad778fcd2f8": "a8866b07fd68fd8aa79070aa83291bfa",
".git/objects/2f/efc0105096e5e9e9362b9d0637f32ed220f6d4": "d364d5c1c5dd894fef0cf00e90e87d3a",
".git/objects/30/2d782b99182fa7647fe33b22b273829f97e45c": "386ecad1fa422d47bc203bbe396bcd80",
".git/objects/32/e996798ab3dda63a28e495778a28731101f5f4": "23e8928a2e74434721491ad3402b4850",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/df4dc97db2d24dfafd86bee845725b34d7e9d9": "0c62b27fe322509191231dceff2d724b",
".git/objects/3c/edcae29d6ec6ee6e11e4ae94fc6b4916cf8c30": "c0cdbfb6b1793b70a18a435023c47655",
".git/objects/46/30f6b42947c2cb6f737d5d0a87ff1f165d4e2e": "2edfec4a1a91b5c523febceb1069f2d0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/47d9bdcb41f0e469e39443139cf18b4c4cf8c9": "676097c4e90cdde4894f56e081a60ae9",
".git/objects/4c/95f75fe8dbde2e084ef94e06723dfa81c2a01a": "c8e234ab6dec20da65436ff9c643a6d7",
".git/objects/4e/bc25636c2eb9b8849f7d5eedf2740f6fcd72e7": "925b1fc11b6e963c34d380b8d7545ddb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/715131257135237d645f622702bf94e85d36f7": "ea6dfc202f7147cdd51baa5b7ba4fce6",
".git/objects/68/adf32ceba51004f35265a9d9c99aba88d0ec7d": "61cec813b51327374bf32ca82c88ed64",
".git/objects/69/68cd8b84d290efab4ec2a91b3d19f11a1a629d": "8be280208991272b0414e17039f2e9d7",
".git/objects/69/e96cfe08bdeb1536f1966e743cdee22481993b": "9e762125e6bc726677561801fcd94b08",
".git/objects/7e/aa843cd5dffb3a5e29d61e994afca23d5a2509": "697afca5767375bb54daf82556069c68",
".git/objects/7f/d66457357a9f8ad81cf71902d5afd030a3b785": "93ff13fba0f7250d5166784b3c3b86b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0c29c4358201996aedd4b14e9eb4ad0ba7dd20": "f7a2e2a3b8b3a843c668537022189a3e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/97/5269999abab080462dddeff0b3e2747fe8a2d4": "e00c10c1acb6892eca182ec256a4233a",
".git/objects/98/bedc0c7e5ee25c9a3b250c60c8509fbe7892ce": "2ccdae837f584bfef7c76acad067115e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/bfa0953abbb134deb5e563e1248e17976bb6cd": "71677fe030b599847cafa07cb43af36d",
".git/objects/a3/95f2fc85eb2fae9e8decf2d9f5e1f2fd1d45e4": "12c1d7cce9ec421b46c7750c07dc0865",
".git/objects/aa/a24e314c084fa42d00f5f5260158b8335534d4": "a15b464194c2a0ce6bb735d4ecfd6877",
".git/objects/ab/722d866d4bdd414380206d12fb2637141654a7": "b3ea6e17f1fb2a044d7db2747e009c95",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/9fe72ff315acf46760e7bd270214761a7ecad7": "1189179dfae5256cb03bedb1d2a84f36",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4c61df3d3a4beac2184d10c26aafd0bf16d64d": "d8f358979835a6ec106d6537d49beb65",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/cf960b45b4f16bed87fdb4163251f9598a7977": "f72a4481d06fda2a6dfbd03d1616fa7e",
".git/objects/dc/0c31d874b831960234b7d53b7f22434a9a9560": "2a9a5094e63cbe2c06073902a9f75ed3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6d5264bf00931af3f40ef97cdab4d299907b6c": "a7fdc904fba086614a279e3455d0b7bf",
".git/objects/ed/c23d767b4c971a227fded471da5f2a22a1ab00": "787bcb2616ad2131b3ccaffe36698bbc",
".git/objects/f7/c6ca26d992a1ee60153a594bc8e30705eb4504": "b8a9f174c7cb9c893024d3af4567b6ff",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "072b4b42b7fd850605ecd445e47c342e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "bcac545a3a9cd4abc51719eca77e0fd4",
".git/refs/remotes/master/HEAD": "18eb70aa4537e3b833ddb76a1299d00f",
".git/refs/remotes/origin/main": "bcac545a3a9cd4abc51719eca77e0fd4",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d73af467a10c1140cb9fbc8337d59b21",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f333c80714404d4b634be4ef0b29b85e",
"/": "f333c80714404d4b634be4ef0b29b85e",
"main.dart.js": "02aab72c1740ef648daaa5068baab0d7",
"manifest.json": "8fe4c2321948b8cb36ccd05405b608de",
"README.md": "611d80bb10e0cc0fb9a4a3b873ae505c",
"version.json": "d256a37d2edc470cc3c76291bef19fe1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
