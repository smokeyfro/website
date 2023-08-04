<template>
    <main class="bg:rgba(255,255,255,0.85)">
        <div class="font:20 overflow:hidden h:100vh">
            <perfect-scrollbar>
                <div class="h:100vh">
                    <div class="p:50|80 rel">
                        <slot />
                    </div>
                </div>
            </perfect-scrollbar>
        </div>
    </main>
</template>