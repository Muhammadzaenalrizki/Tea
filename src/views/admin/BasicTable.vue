<template>
    <div>

        <Card>
            <h2 class="mb-4 text-xl font-bold text-gray-900 "> Basic Table</h2>

            <Table>
                <Thead>

                    <tr>
                        <th scope="col" class="col-table">
                            Product name
                        </th>
                        <th scope="col" class="col-table">
                            Color
                        </th>
                        <th scope="col" class="col-table">
                            Category
                        </th>
                        <th scope="col" class="col-table">
                            Price
                        </th>
                    </tr>
                </Thead>

                <tbody>

                    <tr class="bg-white ">
                        <td scope="row" class="col-table">
                            Apple MacBook Pro 17"
                        </td>
                        <td class="col-table">
                            Silver
                        </td>
                        <td class="col-table">
                            Laptop
                        </td>
                        <td class="col-table">
                            $2999
                        </td>
                    </tr>

                </tbody>
            </Table>

        </Card>
        <Card class="mt-3">
            <h2 class="mb-4 text-xl font-bold text-gray-900 "> Table Bordered</h2>

            <Table class="border border-gray-100">
                <Thead class="border border-gray-100">
                    <tr>
                        <th scope="col" class="col-table">
                            Product name
                        </th>
                        <th scope="col" class="col-table">
                            Color
                        </th>
                        <th scope="col" class="col-table">
                            Category
                        </th>
                        <th scope="col" class="col-table">
                            Price
                        </th>
                    </tr>
                </Thead>

                <tbody>

                    <tr class="bg-white ">
                        <td scope="row" class="col-table">
                            Apple MacBook Pro 17"
                        </td>
                        <td class="col-table">
                            Silver
                        </td>
                        <td class="col-table">
                            Laptop
                        </td>
                        <td class="col-table">
                            $2999
                        </td>
                    </tr>

                </tbody>
            </Table>

        </Card>
    </div>
</template>
<script setup>
import { Table, Thead } from './../../components/Tables/BasicTable/Index.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'   

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>