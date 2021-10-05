function MiniCard(props) {
    return (
        <div class='MiniCard'>
            <div class="container px-4 py-5" id="icon-grid">
                <h2 class="pb-2 border-bottom">Icon grid</h2>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

                    <div class="col d-flex align-items-start">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                        </svg>
                        <div>
                            <h4 class="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}