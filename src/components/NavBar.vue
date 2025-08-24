<script setup></script>

<template>
  <header class="nav-bar">
    <div class="container">
      <h3 class="name">&lt;Jet Ysalina &#47;&gt;</h3>
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-bar {
  position: sticky;
  top: 0;
  border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
  background-color: rgba(var(--color-bg), 0.85);
  backdrop-filter: blur(4px);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    margin: 0;
    text-wrap: nowrap;
  }
  nav {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;
    a {
      text-decoration: none;
      font-size: 0.95em;
      font-weight: 400;
    }
  }
}

@media (min-width: 401px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
