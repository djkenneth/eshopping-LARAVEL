<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
// import PlaceholderPattern from '../components/PlaceholderPattern.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
</script>

<template>
    <Head title="Dashboard" />
    <AppLayout :breadcrumbs="breadcrumbs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta omnis cum provident quas itaque minus corrupti aspernatur fugiat fugit, voluptatem dolorem repellat odio, voluptate suscipit voluptatum dolore deleniti sunt.
    </AppLayout>
</template>

