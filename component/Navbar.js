function Navbar(props) {
    return (
        <div class='Navbar'>
            <header>
                <div class="px-3 py-2 bg-dark text-white">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="bi d-block mx-auto mb-1" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                                </svg>
                                <h5 class='m-2'>kNN Practice site.</h5>
                            </a>

                            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="#" class="nav-link text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link text-secondary">
                                        My projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link text-secondary">
                                        Documents
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="px-3 py-2 border-bottom mb-3">
                    <div class="container d-flex flex-wrap justify-content-center">
                        <div class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            <input type="search" class="form-control" placeholder="Filter..." aria-label="Search" />
                        </div>

                        <div class="text-end">
                            <button type="button" class="btn btn-light text-dark me-2">Login</button>
                            <button type="button" class="btn btn-primary">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}