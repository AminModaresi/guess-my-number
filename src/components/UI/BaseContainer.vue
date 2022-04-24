<template>
    <div class="container">
        <header class="header">
            <slot name="header"></slot>
        </header>
        <div class="main">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 600px;
    background: rgba(165, 209, 217, 0.4);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(165, 209, 217, 0.3);
}
.header{
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(165, 209, 217, 0.3);
}
.main{
    padding: 1rem;
}
</style>