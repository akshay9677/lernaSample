<template>
  <div>
      Hello, {{msg}}
  </div>  
</template>
<script>
export default {
    name: 'Sample',
    props:[
        'msg'
    ]
}
</script>