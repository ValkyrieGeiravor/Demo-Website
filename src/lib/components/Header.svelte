<!-- Header bar -->
<nav class="navbar navbar-expand-lg py-1 mb-3">
    <div class="container">
        <div class="row justify-content-between" style="width: 100%;">
            <!-- Brand name and nav button -->
            <div class="col-5 col-lg-3 d-flex align-items-center">
                <!-- Toggle nav navigation button -->
                <button class="btn btn-outline-success d-block d-lg-none my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <strong>≡</strong>
                </button>              
                <!-- Logo and brandname -->
                <a class="d-flex align-items-center" href="/">
                    <img alt="logo" height="40" class="rounded d-none d-lg-inline-flex ms-2" src="https://vnptgroup.vn/wp-content/uploads/2021/09/Logo-VNPT.png">
                    <span class="ms-2 fs-2 fw-bold fst-italic" style="letter-spacing: -2px;">SvelteKit</span>
                </a>
            </div>
            
            <!-- Nav links -->
            <div class="col-7 collapse navbar-collapse order-3 order-lg-2" id="navbarNav">
                <!-- Search bar -->
                <div class="input-group me-3 mt-2 mt-lg-0">
                    <input type="text" class="form-control" placeholder="Search here...">
                    <button class="input-group-text" id="basic-addon2">🔎</button>
                </div>
                <!-- Nav links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Homepage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>  
            </div>

            <!-- User account -->
            <div class="col-3 col-lg-2 d-flex align-items-center justify-content-end order-2 order-lg-3">
                {#if username == '' || username == undefined}
                    <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</button>
                {:else}
                    <button class="btn btn-outline-success" on:click={logout}>{username}</button>
                     {/if}
                <!-- <a class="btn btn-outline-success" href="/login" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</a> -->
            </div>
        </div>
    </div>
</nav>

<!-- Modal -->
<Login {login}/>

<script>
    import Login from "./Login.svelte";

    let username = '';

    try {
        username = localStorage.getItem('user') || '';
    } catch (error) {
        null
    }

    /**
     * @param {string} user
     */
    function login(user) {
        localStorage.setItem('user', user);
        alert('Login success');
        username = user;
        
    }

    function logout() {
        let confirmLogout = confirm('Are you sure to logout?');
        if (confirmLogout) {
            localStorage.removeItem('user');
            username = '';
        }
    }

</script>