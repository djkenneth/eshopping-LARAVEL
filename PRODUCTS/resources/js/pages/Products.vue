<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
// import PlaceholderPattern from '../components/PlaceholderPattern.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/PRODUCTS/product',
    },
];
</script>

<template>
    <Head title="Products" />
    <AppLayout :breadcrumbs="breadcrumbs">
        Hello world
    </AppLayout>
</template>

