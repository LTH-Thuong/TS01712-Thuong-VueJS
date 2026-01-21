<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">My Blog</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#">
                                <i class="bi bi-person-circle"></i> Tài khoản
                            </a>
                            <ul class="dropdown-menu bg-emphasis ">
                                <li class="dropdown-item">
            <router-link class="nav-link text-dark" to="/login">Login</router-link>
          </li>
                                <li class="dropdown-item">
            <router-link class="nav-link text-dark" to="/register">Register</router-link>
          </li>
                            </ul>
                        </li>
          
         
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
