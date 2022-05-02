<template>
    <div id="auth-layout">
        <img src="@/assets/logo-full.svg" alt="logo">
        <div class="auth-card flow">
            <slot />
        </div>
    </div>
</template>

<script>

export default {
    name: "AuthLayout",
    computed: {
    }
}
</script>

<style>
    #auth-layout {
        padding-top: 60px;
    }
    .auth-card {
        margin: 3rem auto ;
        padding: 2rem 6.125rem;
        width: 50%;
        max-width: 600px;
        box-shadow: 0px 4px 50px rgba(86, 88, 109, 0.1);
        border-radius: 8px;
        background: #fff;
        --flow-space: 10rem;
    }
    .auth-form {
        margin: 50px 0;
    }
    p {
        margin: 16px 0;
    }
</style>