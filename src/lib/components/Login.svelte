<!-- Login modal -->
<div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Login</h1>
                <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Credential your account</label>

                    <!-- Username input -->
                    <div class="input-group">
                        <span class="input-group-text">Username</span>
                        <input type="text" class="form-control" bind:value={username} required>
                    </div>
                    <div class="form-text text-end text-danger">* Require</div>

                    <!-- Password input -->
                    <div class="input-group">
                        <span class="input-group-text">Password</span>
                        <input type="password" class="form-control" bind:value={password} required>
                    </div>
                    <div class="form-text text-end text-danger">* Require</div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" on:click={closeModal}>Login</button>
            </div>
        </div>
    </div>
</div>

<script>
    /**
     * @type {(arg0: string) => void}
     */
     export let login
    
    let username = '';
    let password = '';

    function closeModal(){
        if(username == '' || password == ''){
            alert('Please fill in all fields');
            return;
        } else {
            login(username);
            document.getElementById('btn-close')?.click();
        }
    }
</script>