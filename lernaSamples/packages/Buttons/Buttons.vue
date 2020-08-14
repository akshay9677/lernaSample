<template>
    <div>
    <el-button  v-if='red' type='success' >{{msg}}</el-button>
    <el-button v-else type='danger' >{{msg}}</el-button>
    </div>
</template>
<script>
export default {
    name: 'Buttons',
    props:['msg','red']
}
</script>