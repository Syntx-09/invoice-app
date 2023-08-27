import { createRouter, createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue';
import notFound from '../components/NotFound.vue';
import invoiceCreate  from '../components/invoices/create_newInvoice.vue'

const routes = [
    {
        path:'/',
        component: invoiceIndex
    },
    {
        path:'/invoice/create_newInvoice',
        component: invoiceCreate
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router