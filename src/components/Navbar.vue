<template>
  <div>
    <nav class="navbar navbar-expand-custom navbar-mainbg">
      <a class="navbar-brand navbar-logo" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <div class="hori-selector">
            <div class="left"></div>
            <div class="right"></div>
          </div>

          <li class="nav-item active">
            <router-link to="/"> Dashboard </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/produtos"> Produtos </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
