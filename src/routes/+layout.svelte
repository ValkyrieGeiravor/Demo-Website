
<!-- Header -->
<Header/>

<!-- Page content -->
<div style="min-height: 80vh;">
    <slot />
</div>

<!-- Footer -->
<Footer/>

<script>
    import Header from '../lib/components/Header.svelte';
    import Footer from '../lib/components/Footer.svelte';
</script>