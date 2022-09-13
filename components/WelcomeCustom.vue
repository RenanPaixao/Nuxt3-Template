<template>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base"
  >
    <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20">
      <div class="flex justify-between items-end col-span-3">
        <NuxtLink class="font-medium text-2xl" to="/new-project">
          Page 2
        </NuxtLink>
      </div>
      <div class="col-span-3 rounded p-4 flex flex-col gradient-border">
        <div class="flex justify-between items-center mb-4">
          <h4 class="font-medium text-2xl">
            Get Started
          </h4>
        </div>
        <p class="mb-2">
          Remove this welcome page by modifying the index.vue
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spotlight {
  background: linear-gradient(45deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
  filter: blur(20vh);
  height: 50vh;
  bottom: -40vh;
}
.spotlight-wrapper {
  opacity: 0.5;
  transition: opacity 0.4s ease-in;
}
.nuxt-logo:hover ~ .spotlight-wrapper {
  opacity: 0.95;
}
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
}
@media (prefers-color-scheme: light) {
  .gradient-border {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #e2e2e2 0%,
      #e2e2e2 25%,
      #00dc82 50%,
      #36e4da 75%,
      #0047e1 100%
    );
  }
}
@media (prefers-color-scheme: dark) {
  .gradient-border {
    background-color: rgba(20, 20, 20, 0.3);
  }
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #303030 0%,
      #303030 25%,
      #00dc82 50%,
      #36e4da 75%,
      #0047e1 100%
    );
  }
}
.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  background-position: 0 0;
  opacity: 0.5;
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.gradient-border:hover::before {
  background-position: -50% 0;
  opacity: 1;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}
.rounded {
  border-radius: 0.25rem;
}
.cursor-pointer {
  cursor: pointer;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.grid {
  display: -ms-grid;
  display: grid;
}
.flex-col {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.place-content-center {
  place-content: center;
}
.items-end {
  -webkit-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.justify-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
}
.font-medium {
  font-weight: 500;
}
.font-bold {
  font-weight: 700;
}
.font-semibold {
  font-weight: 600;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.max-w-5xl {
  max-width: 64rem;
}
.min-h-screen {
  min-height: 100vh;
}
.p-4 {
  padding: 1rem;
}
.p-8 {
  padding: 2rem;
}
.p-1 {
  padding: 0.25rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.fixed {
  position: fixed;
}
.left-0 {
  left: 0px;
}
.right-0 {
  right: 0px;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-full {
  width: 100%;
}
.w-40 {
  width: 10rem;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.gap-4 {
  grid-gap: 1rem;
  gap: 1rem;
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.col-span-3 {
  -ms-grid-column-span: span 3 / span 3;
  grid-column: span 3 / span 3;
}
@media (min-width: 640px) {
  .sm\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .sm\:pb-2 {
    padding-bottom: 0.5rem;
  }
  .sm\:col-span-1 {
    -ms-grid-column-span: span 1 / span 1;
    grid-column: span 1 / span 1;
  }
}
@media (min-width: 768px) {
  .md\:gap-8 {
    grid-gap: 2rem;
    gap: 2rem;
  }
}
@media (prefers-color-scheme: dark) {
  .dark\:bg-black {
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  }
  .dark\:bg-white\/10 {
    --tw-bg-opacity: 0.1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  }
  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }
}
</style>
