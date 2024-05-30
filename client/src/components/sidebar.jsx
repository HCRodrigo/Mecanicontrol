import './sidebar.css';

function Home() {
    return (
        <body>
            <nav>
                <div class="menu">
                    <i class='bx bx-menu menu-icon'></i>
                    <span class="icon-name">MECANICONTROL</span>
                </div>
                <div class="sidebar">
                    <div class="menu">
                        <i class='bx bx-menu menu-icon'></i>
                        <span class="icon-name">MECANICONTROL</span>
                    </div>
                    <div class="sidebar-content">
                        <ul class="lists">
                            <li class="list">
                                <a href="/home" class="nav-link">
                                    <i class='bx bxs-home icon' ></i>
                                    <span class="link">Home</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/cliente" class="nav-link">
                                    <i class='bx bxs-user icon' ></i>
                                    <span class="link">Clientes</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/lojas" class="nav-link">
                                    <i class='bx bxs-store icon' ></i>
                                    <span class="link">Lojas</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/notas" class="nav-link">
                                    <i class='bx bxs-notepad icon' ></i>
                                    <span class="link">Notas</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/calendario" class="nav-link">
                                    <i class='bx bxs-calendar icon' ></i>
                                    <span class="link">Calendario</span>
                                </a>
                            </li>
                        </ul>
                        <div class="bottom-cotent">
                            <li class="list">
                                <a href="#" class="nav-link">
                                    <i class='bx bxs-cog icon' ></i>
                                    <span class="link">Configurações</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/" class="nav-link">
                                    <i class='bx bx-log-in icon'></i>
                                    <span class="link">Sair</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            <section class="overlay"> </section>
            <script>
                const navBar = document.querySelector("nav"),
                menuBtns = document.querySelectorAll(".menu-icon"),
                overlay = document.querySelector(".overlay");
            </script>
        </body>
    )
  }
  
  export default Home