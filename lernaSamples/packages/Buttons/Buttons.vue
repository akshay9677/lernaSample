<template>
<div>
    <el-button type="success">{{msg}}</el-button>
    </div>
</template>
<script>
import {Button} from 'element-ui';
export default {
    name: 'Buttons',
    props:['msg']
}
</script>